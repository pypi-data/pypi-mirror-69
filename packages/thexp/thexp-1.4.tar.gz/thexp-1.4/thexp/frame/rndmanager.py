"""
    Copyright (C) 2020 Shandong University

    This program is licensed under the GNU General Public License 3.0 
    (https://www.gnu.org/licenses/gpl-3.0.html). 
    Any derivative work obtained under this license must be licensed 
    under the GNU General Public License as published by the Free 
    Software Foundation, either Version 3 of the License, or (at your option) 
    any later version, if this derivative work is distributed to a third party.

    The copyright for the program is owned by Shandong University. 
    For commercial projects that require the ability to distribute 
    the code of this program as part of a program that cannot be 
    distributed under the GNU General Public License, please contact 
            
            sailist@outlook.com
             
    to purchase a commercial license.
"""
import os
import pickle
import time

from ..utils import random


class RndManager:
    """
    用于管理随机种子
    """

    def __init__(self, save_dir="./rnd"):
        self.save_dir = save_dir

    def mark(self, name):
        """
        用于数据集读取一类的，需要特定步骤每一次试验完全相同
        Args:
            name: 该次标记固定种子的名字，第一次调用该方法会在特定目录存放当前状态，
            第二次调用会在该位置读取当前随机种子状态

        Returns:

        """
        stt = self._get_rnd_state(name)
        if stt is not None:
            random.set_state(stt)
            return True
        else:
            self._save_rnd_state(name)
            return False

    def int_time(self):
        """用于获取一个理论上不会重复随机种子"""
        return int(str(time.time()).split(".")[-1])

    def shuffle(self, name='shuffle', seed=None):
        """
        打乱，一般用于复现试验的时候随机一个种子
        Args:
            name:
            seed:

        Returns:

        """
        if seed is None:
            random.fix_seed(self.int_time())
        else:
            random.fix_seed(seed)

        self._save_rnd_state(name)

    def list(self):
        """列出当前保存的所有种子"""
        return [os.path.join(self.save_dir, f) for f in os.listdir(self.save_dir) if f.endswith('rnd')]

    def _save_rnd_state(self, name):
        """保存种子"""
        if not os.path.exists(self.save_dir):
            os.makedirs(self.save_dir)

        stt = random.get_state()
        with open(self._build_state_name(name), "wb") as f:
            pickle.dump(stt, f)

    def _have_rnd_state(self, name) -> bool:
        """判断是否存在某个种子"""
        if not os.path.exists(self.save_dir):
            return False
        return os.path.exists(self._build_state_name(name))

    def _get_rnd_state(self, name):
        """获取某个种子"""
        if not self._have_rnd_state(name):
            return None
        with open(self._build_state_name(name), "rb") as f:
            return pickle.load(f)

    def _build_state_name(self, name, replacement=False):
        if replacement:
            i = 1
            fn = os.path.join(self.save_dir, "{}.{:02d}.rnd".format(name, i))
            while os.path.exists(fn):
                i += 1
                fn = os.path.join(self.save_dir, "{}.{:02d}.rnd".format(name, i))
        else:
            fn = os.path.join(self.save_dir, "{}.rnd".format(name))

        return fn
