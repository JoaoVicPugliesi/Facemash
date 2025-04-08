import fastifyCors from "@fastify/cors";
import { app } from "./adapters/FastifyAdapter";
import { Routes } from "./routes/Routes";

// interface AppOptions {
//     port: number,
//     host: string
// }

interface AppAdapter {
  listen: (options?: Record<PropertyKey, any>) => Promise<any>;
}

class Application {
  constructor(private readonly app: AppAdapter) {}

  async run() {
    try {
      await this.app.listen({
        port: 8000,
        host: "0.0.0.0",
      });

      console.log(`Server is running on http://localhost:8000`);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
}

const application = new Application(app);
const routes = new Routes(app);
app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
});
routes.setupRoutes();
application.run();