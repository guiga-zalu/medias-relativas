from avg import Mean

class RelativeMean(Mean):
	def __init__(self, v*):
		Mean.__init__(v)
	def low_mean(self):
		mean = self.mean()
		return self.constructor(filter(lambda v: v < mean, self.values))
	def high_mean(self):
		mean = self.mean()
		return self.constructor(filter(lambda v: v > mean, self.values))
	def central_mean(self):
		low_mean = self.low_mean().mean(), high_mean = self.high_mean().mean()
		return self.constructor(filter(lambda v: v > low_mean and v < high_mean, self.values))
class RelativeGeometricMean(RelativeMean):
	def __init__(self):
		RelativeMean.__init__(self)
	def mean(self):
		prod = 1
		for v in self.values:
			prod *= v
		return pow(prod, 1 / self.factor())
class RelativeQuadraticMean(RelativeMean):
	def __init__(self):
		RelativeMean.__init__(self)
	def mean(self):
		return sqrt(sum(map(lambda v: v ** 2, self.values)) / self.factor())
class RelativeHarmonicMean(RelativeMean):
	def __init__(self):
		RelativeMean.__init__(self)
	def mean(self):
		return self.factor() / sum(map(lambda v: 1 / v, self.values))