import express from 'express';
import { exec } from 'child_process';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const SECRET = process.env.WEBHOOK_SECRET;
const REPO_PATH = '/opt/zsofiesandris.hu';

app.use(express.text({ type: 'application/json' }));

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-hub-signature-256'];
  const body = req.body;

  console.log('=== Webhook Debug Info ===');
  console.log('Body length:', body ? body.length : 0);
  console.log('GitHub signature:', signature);

  if (!SECRET) {
    console.log('ERROR: WEBHOOK_SECRET not configured');
    return res.status(500).send('Server configuration error');
  }

  if (!signature) {
    console.log('ERROR: No signature header');
    return res.status(401).send('No signature');
  }

  if (!body) {
    console.log('ERROR: No body');
    return res.status(400).send('No body');
  }

  const hash = crypto.createHmac('sha256', SECRET).update(body, 'utf8').digest('hex');
  const expectedSignature = `sha256=${hash}`;

  console.log('Expected signature:', expectedSignature);
  console.log('Signatures match:', expectedSignature === signature);

  if (expectedSignature !== signature) {
    console.log('Invalid signature - deployment blocked');
    return res.status(401).send('Invalid signature');
  }

  console.log('Signature validated! Starting deployment...');

  const command = `cd ${REPO_PATH} && git fetch && git pull && npm ci && npm run build && npx pm2 restart wedding-app`;

  exec(command, (error, stdout, stderr) => {
    console.log('STDOUT:', stdout);
    if (stderr) console.log('STDERR:', stderr);
    if (error) {
      console.error('Error:', error);
      return res.status(500).send('Deployment failed');
    }
    console.log('Deployment completed successfully');
  });

  res.status(200).send('Deployment triggered');
});

app.listen(9000, () => {
  console.log('Webhook listener running on port 9000');
});
