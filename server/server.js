import Express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import matchRoutes from './matchRoutes'
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
	const app = new Express();
	const compiler = webpack(webpackConfig);
	app.use(Express.static('static'));
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath,serverSideRender: true  }));
	app.get("/",(req,res)=>{
		matchRoutes({filterData:1},req.path,res)
	})
	app.get("/home",(req,res)=>{
		matchRoutes({filterData:1},req.path,res)
	})
	app.listen(5000, (error) => {
	  	if (error) {
	    	console.error(error);
	  	} else {
	    	console.info(`Listening on port 5000`);
	  	}
	})