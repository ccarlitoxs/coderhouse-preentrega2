import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(
	process.env.MONGODBURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) {
			console.log( 'Conexion exitosa a la base de datos')
		} else {
			console.log(err)
		}
	},
)

export default mongoose