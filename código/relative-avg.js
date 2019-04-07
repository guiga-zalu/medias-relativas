const {Mean} = require('./avg');
class RelativeMean extends Mean{
	get low_mean(){
		let mean = this.mean;
		return new this.constructor(this.filter(v => v < mean));
	}
	get high_mean(){
		let mean = this.mean;
		return new this.constructor(this.filter(v => v > mean));
	}
	get central_mean(){
		let low_mean = this.low_mean.mean, high_mean = this.high_mean.mean;
		return new this.constructor(this.filter(v => v > low_mean && v < high_mean));
	}
}
class RelativeGeometricMean extends RelativeMean{
	get mean(){
		return Math.pow(this.reduce((a, b) => a * b, 1), 1 / this.factor);
	}
}
class RelativeQuadraticMean extends RelativeMean{
	get mean(){
		return Math.sqrt(this.map(v => v ** 2).reduce((a, b) => a + b, 0) / this.factor);
	}
}
class RelativeHarmonicMean extends RelativeMean{
	get mean(){
		return this.factor / (this.map(v => v ** -1).reduce((a, b) => a + b, 0));
	}
}

module.exports = RelativeMean;
RelativeMean.RelGeoMean = RelativeGeometricMean;
RelativeMean.RelQuadMean = RelativeQuadraticMean;
RelativeMean.RelHarmMean = RelativeHarmonicMean;