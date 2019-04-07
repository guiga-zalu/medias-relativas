class Mean extends Array{
	constructor(...vals){
		const c = this.constructor;
		if(vals.length === 1)
			super(Number(vals));
		else if(vals.length === 0)
			super();
		else
			super(...c.filter(vals));
	}
	push(...v){
		super.push(...c.filter(v));
	}
	static filter(arr){
		return arr.map(v => parseFloat(v)).filter(isFinite);
	}
	toNumber(){
		return this.mean;
	}
	valueOf(){
		return this.mean;
	}
	get mean(){
		return this.reduce((a, b) => a + b, 0) / this.factor;
	}
	get factor(){
		return this.length;
	}
}
class GeometricMean extends Mean{
	get mean(){
		return Math.pow(this.reduce((a, b) => a * b, 1), 1 / this.factor);
	}
}
class QuadraticMean extends Mean{
	get mean(){
		return Math.sqrt(this.map(v => v ** 2).reduce((a, b) => a + b, 0) / this.factor);
	}
}
class HarmonicMean extends Mean{
	get mean(){
		return this.factor / (this.map(v => v ** -1).reduce((a, b) => a + b, 0));
	}
}

module.exports = Mean;
Mean.GeoMean = GeometricMean;
Mean.QuadMean = QuadraticMean;
Mean.HarmMean = HarmonicMean;