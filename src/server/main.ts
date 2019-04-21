import { get } from 'config';

import app from 'server/app';
import { IConfig } from 'server/types/application';

const { port }: IConfig['server'] = get('server');

app.listen(port,  () => {
  console.log(`Server start listening on port ${port}`);
});
