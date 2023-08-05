""" Base classes for ruleset classifiers """
# Author: Ilan Moscovitz <ilan.moscovitz@gmail.com>
# License: MIT

import copy
import math

import numpy as np
from numpy import var, mean

from wittgenstein.check import _warn, _check_all_of_type


class Ruleset:
    """Collection of Rules in disjunctive normal form."""

    def __init__(self, rules=None):
        if rules is None:
            self.rules = []
        else:
            self.rules = rules
        self.cond_count = 0

    def __str__(self):
        return " V ".join([str(rule) for rule in self.rules])

    def __repr__(self):
        ruleset_str = self.__str__()
        return f"<Ruleset {ruleset_str}>"

    def __getitem__(self, index):
        return self.rules[index]

    def __len__(self):
        return len(self.rules)

    def truncstr(self, limit=2, direction="left"):
        """Return Ruleset string representation.

        limit : int, default=2
            Maximum number of rules to include in string.
        Direction : str, default="left"
            Which end of ruleset to return. Valid options: 'left', 'right'.
        """
        if len(self.rules) > limit:
            if direction == "left":
                return Ruleset(self.rules[:limit]).__str__() + "..."
            elif direction == "right":
                return "..." + Ruleset(self.rules[-limit:]).__str__()
            else:
                raise ValueError('direction param must be "left" or "right"')
        else:
            return self.__str__()

    def __eq__(self, other):
        # if type(other)!=Ruleset:
        #    raise TypeError(f'{self} __eq__ {other}: a Ruleset can only be compared with another Ruleset')
        for r in self.rules:
            # TODO: Ideally, should implement a hash function--in practice speedup would be insignificant
            if r not in other.rules:
                return False
        for (
            r
        ) in (
            other.rules
        ):  # Check the other way around too. (Can't compare lengths instead b/c there might be duplicate rules.)
            if r not in self.rules:
                return False
        return True

    def __len__(self):
        return len(self.rules)

    def out_pretty(self):
        """Print Ruleset line-by-line."""
        ruleset_str = (
            str([str(rule) for rule in self.rules])
            .replace(" ", "")
            .replace(",", " V\n")
            .replace("'", "")
            .replace("^", " ^ ")
        )
        print(ruleset_str)

    def isuniversal(self):
        """Return whether the Ruleset has an empty rule, i.e. it will always return positive predictions."""
        if len(self.rules) >= 1:
            return all(rule.isempty() for rule in self.rules)
        else:
            return False

    def isnull(self):
        """Return whether the Ruleset has no rules, i.e. it will always return negative predictions."""
        return len(self.rules) == 0

    def copy(self, n_rules_limit=None):
        """Return a deep copy of ruleset.

        n_rules_limit : default=None
            Limit copy to this a subset of original rules.
        """
        result = copy.deepcopy(self)
        if n_rules_limit is not None:
            result.rules = result.rules[:n_rules_limit]
        return result

    def covers(self, df):
        """Return covered examples."""

        self._check_allpos_allneg(warn=False)
        if self.isuniversal():
            return df
        elif self.isnull():
            return df.head(0)
        else:
            covered = self.rules[0].covers(df).copy()
            for rule in self.rules[1:]:
                covered = covered.append(rule.covers(df))
            covered = covered.drop_duplicates()
            return covered

    def num_covered(self, df):
        """Return the number of covered examples."""
        return len(self.covers(df))

    def add(self, rule):
        """Add a rule."""
        self.rules.append(rule)

    def count_rules(self):
        """Return number of rules in the Ruleset."""
        return len(self.rules)

    def count_conds(self):
        """Return total number of conds in the Ruleset."""
        return sum([len(r.conds) for r in self.rules])

    def _set_possible_conds(self, pos_df, neg_df):
        """ Stores a list of all possible conds. """

        # Used in Rule::successors so as not to rebuild it each time,
        # and in exceptions_dl calculations because nCr portion of formula already accounts for no replacement.)

        self.possible_conds = []
        for feat in pos_df.columns.values:
            for val in set(pos_df[feat].unique()).intersection(
                set(neg_df[feat].unique())
            ):
                self.possible_conds.append(Cond(feat, val))

    def trim_conds(self, max_total_conds=None):
        """.Reduce the total number of Conds in a Ruleset by removing Rules."""
        if max_total_conds is not None:
            while len(self.rules) > 0 and self.count_conds() > max_total_conds:
                self.rules.pop(-1)

    def trimmed_str(iterable, max_items=3):
        return str(iterable[:max_items])[-1] + "..."

    def predict(self, X_df, give_reasons=False, warn=True):
        """Predict classes using a fit Ruleset.

        Parameters
        ----------
        X_df : DataFrame
            Examples to make predictions on.
        give_reasons : bool, default=False
            Whether to also return reasons for each prediction made.

        Returns
        -------
        list<bool>
            Predictions. True indicates positive predicted class, False negative.

        If give_reasons is True, returns a tuple that contains the above list of predictions
            and a list of the corresponding reasons for each prediction;
            for each positive prediction, gives a list of one-or-more covering Rules, for negative predictions, an empty list.
        """

        # Issue warning if Ruleset is universal or empty
        self._check_allpos_allneg(warn=warn, warnstack=[("base", "predict")])

        covered_indices = set(self.covers(X_df).index.tolist())
        predictions = [i in covered_indices for i in X_df.index]

        if not give_reasons:
            return predictions
        else:
            reasons = []
            # For each Ruleset-covered example, collect list of every Rule that covers it;
            # for non-covered examples, collect an empty list
            for i, p in zip(X_df.index, predictions):
                example = X_df[X_df.index == i]
                example_reasons = (
                    [rule for rule in self.rules if len(rule.covers(example)) == 1]
                    if p
                    else []
                )
                reasons.append(example_reasons)
            return (predictions, reasons)

    def predict_proba(self, X_df, give_reasons=False):
        """ Predict probabilities for each class using a fit Ruleset model.

        Parameters
        ----------
        X_df : DataFrame
            Examples to make predictions on.
        give_reasons : bool, default=False
            Whether to also return reasons for each prediction made.

        Returns
        -------
        array<bool>
            Predicted probabilities in order negative, positive probabilities.
            If an example is predicted positive but none of its rules met the required number of proba training examples,
            returns proba of 0 for both classes and issues a warning.

        If give_reasons is True, returns a tuple that contains the above list of predictions
            and a list of the corresponding reasons for each prediction;
            for each positive prediction, gives a list of one-or-more covering Rules, for negative predictions, an empty list.
        """

        # Get proba for all negative predictions
        uncovered_proba = weighted_avg_freqs([self.uncovered_class_freqs])

        # Make predictions for each example
        predictions, covering_rules = self.predict(X_df, give_reasons=True, warn=False)

        # Calculate probas for each example
        invalid_example_idx = []
        probas = np.empty(shape=(len(predictions), uncovered_proba.shape[0]))
        for i, (p, cr) in enumerate(zip(predictions, covering_rules)):
            if not p:
                probas[i, :] = uncovered_proba
            else:
                # Make sure only using rules that had enough samples to record
                valid_class_freqs = [
                    rule.class_freqs for rule in cr if rule.class_freqs is not None
                ]
                if valid_class_freqs:
                    probas[i, :] = weighted_avg_freqs(valid_class_freqs)
                else:
                    probas[i, :] = 0
                    invalid_example_idx.append(i)

        # Warn if any examples didn't have large enough sample size of any rules
        if invalid_example_idx:
            warning_str = f"Some examples lacked any rule with sufficient sample size to predict_proba: {invalid_example_idx}\n Consider running recalibrate_proba with smaller param min_samples, or set require_min_samples=False"
            _warn(
                warning_str, RuntimeWarning, filename="base", funcname="predict_proba",
            )
        # return probas (and optional extras)
        result = flagged_return([True, give_reasons], [probas, covering_rules])
        return result

    def _check_allpos_allneg(self, warn=False, warnstack=""):
        """Check if a Ruleset is universal (always predicts pos) or empty (always predicts neg) """
        if self.isuniversal() and warn:
            warning_str = f"Ruleset is universal. All predictions it makes with method .predict will be positive. It may be untrained or was trained on a dataset split lacking negative examples."
            _warn(
                warning_str,
                RuntimeWarning,
                filename="base",
                funcname="_check_allpos_allneg",
                warnstack=warnstack,
            )
        elif self.isnull() and warn:
            warning_str = f"Ruleset is empty. All predictions it makes with method .predict will be negative. It may be untrained or was trained on a dataset split lacking positive examples."
            _warn(
                warning_str,
                RuntimeWarning,
                filename="base",
                funcname="_check_allpos_allneg",
                warnstack=warnstack,
            )
        return self.isuniversal(), self.isnull()

    def get_selected_features(self):
        """Return list of selected features in order they were added."""
        feature_list = []
        feature_set = set()
        for rule in self.rules:
            for cond in rule.conds:
                feature = cond.feature
                if feature not in feature_set:
                    feature_list.append(feature)
                    feature_set.add(feature)
        return feature_list


class Rule:
    """Conjunction of Conds"""

    def __init__(self, conds=None):
        if conds is None:
            self.conds = []
        else:
            self.conds = conds

    def __str__(self):
        if not self.conds:
            rule_str = "[True]"
        else:
            rule_str = (
                str([str(cond) for cond in self.conds])
                .replace(",", "^")
                .replace("'", "")
                .replace(" ", "")
            )
        return rule_str

    def __repr__(self):
        return f"<Rule {str(self)}>"

    def __add__(self, cond):
        if isinstance(cond, Cond):
            return Rule(self.conds + [cond])
        else:
            raise TypeError(
                f"{self} + {cond}: Rule objects can only conjoin Cond objects."
            )

    def __eq__(self, other):
        if len(self.conds) != len(other.conds):
            return False
        return set([str(cond) for cond in self.conds]) == set(
            [str(cond) for cond in other.conds]
        )

    def __hash__(self):
        return hash(str([self.conds]))

    def __len__(self):
        return len(self.conds)

    def isempty(self):
        return len(self.conds) == 0

    def covers(self, df):
        """Return instances covered by the Rule."""
        covered = df.head(len(df))
        for cond in self.conds:
            covered = cond.covers(covered)
        return covered

    def num_covered(self, df):
        return len(self.covers(df))

    def covered_feats(self):
        """Return list of features covered by the Rule."""
        return [cond.feature for cond in self.conds]

    #############################################
    ##### Rule::grow/prune helper functions #####
    #############################################

    def successors(self, possible_conds, pos_df, neg_df):
        """Return a list of all valid successor rules.

        Parameters
        ----------

        possible_conds : list<Cond>
        List of Conds to consider conjoining to create successors.
        Passing None will infer possible conds from columns of pos_df and neg_df.
        Note: If pos_df and neg_df are data subsets, it will only generate possible_conds
        from their available values.
        """

        if possible_conds is not None:
            successor_conds = [
                cond for cond in possible_conds if cond not in self.conds
            ]
            return [Rule(self.conds + [cond]) for cond in successor_conds]
        else:
            successor_rules = []
            for feat in pos_df.columns.values:
                for val in set(pos_df[feat].unique()).intersection(
                    set(neg_df[feat].unique())
                ):
                    if (
                        feat not in self.covered_feats()
                    ):  # Conds already in Rule and Conds that contradict Rule aren't valid successors / NB Rules are short; this is unlikely to be worth the overhead of cheacking
                        successor_rules.append(self + Cond(feat, val))
            return successor_rules


class Cond:
    """Conditional"""

    def __init__(self, feature, val):
        self.feature = feature
        self.val = val

    def __str__(self):
        return f"{self.feature}={self.val}"

    def __repr__(self):
        return f"<Cond {self.feature}={self.val}>"

    def __eq__(self, other):
        return self.feature == other.feature and self.val == other.val

    def __hash__(self):
        return hash((self.feature, self.val))

    def covers(self, df):
        """Return instances covered by the Cond, i.e. those which are not in contradiction with it."""
        return df[df[self.feature] == self.val]

    def num_covered(self, df):
        return len(self.covers(df))


##############################
######## MATH/HELPERS ########
##############################


def weighted_avg_freqs(counts):
    """Return weighted mean proportions of counts in the list.

    counts <list<tuple>>
    """
    arr = np.array(counts)
    total = arr.flatten().sum()
    return arr.sum(axis=0) / total if total else arr.sum(axis=0)


def flagged_return(flags, objects):
    """Return only objects with corresponding True flags. Useful for functions with multiple possible return items."""
    if sum(flags) == 1:
        return objects[0]
    elif sum(flags) > 1:
        return tuple([object for flag, object in zip(flags, objects) if flag])
    else:
        return ()


def rnd(float, places=None):
    """Round a float to decimal places.

    float : float
        Value to round.
    places : int, default=None
        Number of decimal places to round to. None defaults to 1 decimal place if float < 100, otherwise defaults to 0 places.
    """
    if places is None:
        if float < 1:
            places = 2
        elif float < 100:
            places = 1
        else:
            places = 0
    rounded = round(float, places)
    if rounded != int(rounded):
        return rounded
    else:
        return int(rounded)
