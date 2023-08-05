#!/usr/bin/env python3

'''
Author: Artem Streltsov
'''

import sys
sys.path.append(".")

from typing import Callable, Tuple, List, NewType
import pandas as pd
import matplotlib.pyplot as plt
import math
from . import DEMethod


Float = NewType('step', float)
Frame = NewType('frame', pd.DataFrame)

class EulerMethod(DEMethod.DESolveMethod):
    def __init__(self):
        pass

    @staticmethod
    def n_iterations(segment: List[float], step: Float) -> int:
        return int((segment[1] - segment[0]) / step)

    @staticmethod
    def delta_y(f: Callable[[float, float], float],
                x: Float,
                y: Float,
                step: Float) -> int:
        return step * f(x + step / 2, y + step / 2 * f(x, y))

    @DEMethod.support_lambda
    def solve(self, f: Callable[[float, float], float],
              initial_dot: Tuple[float, float],
              segment: List[float],
              step: Float) -> pd.DataFrame:

        if len(segment) != 2:
            raise Exception('Segment must be a list of size = 2.')

        table = []
        x_0, y_0 = initial_dot[0], initial_dot[1]
        table.append(
            {
                'i': 0,
                'x': x_0,
                'y': y_0,
                'func': f(x_0, y_0)
            }
        )

        for i in range(1, self.n_iterations(segment, step) + 1):
            x_last, y_last = table[i - 1]['x'], table[i - 1]['y']
            x_new = x_last + step
            y_new = y_last + self.delta_y(f, x_last, y_last, step)
            table.append(
                {
                    'i': i,
                    'x': x_new,
                    'y': y_new,
                    'func': f(x_new, y_new)
                }
            )

        df = pd.DataFrame(table)
        return df

    def __str__(self):
        return 'Euler method of solving differential equations.'
