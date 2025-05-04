import 'dotenv/config';
import { app } from './app';
import { envConfig } from './config';

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
