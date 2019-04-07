from math import sqrt, pow

class Mean():
	def __init__(self, vals*):
		if(len(vals) == 1):
			self.values = [float(vals[0])]
		elif(len(vals) == 0):
			self.values = []
		else:
			self.values = map(lambda v: float(v), vals)
	def mean(self):
		return sum(self.values) / self.factor()
	def factor(self):
		return len(self)
class GeometricMean(Mean):
	def __init__(self):
		Mean.__init__(self)
	def mean(self):
		prod = 1
		for v in self.values:
			prod *= v
		return pow(prod, 1 / self.factor())
class QuadraticMean(Mean):
	def __init__(self):
		Mean.__init__(self)
	def mean(self):
		return sqrt(sum(map(lambda v: v ** 2, self.values)) / self.factor())
class HarmonicMean(Mean):
	def __init__(self):
		Mean.__init__(self)
	def mean(self):
		return self.factor() / sum(map(lambda v: 1 / v, self.values))