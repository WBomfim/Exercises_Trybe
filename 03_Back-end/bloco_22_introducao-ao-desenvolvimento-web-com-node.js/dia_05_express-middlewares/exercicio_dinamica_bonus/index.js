const express = require('express');
const fs = require('fs/promises');
const { validateName } = require('./middleware/validateName');
const { validateInitials } = require('./middleware/validateInitials');
const { validateCountry } = require('./middleware/validateCountry');

const app = express();
app.use(express.json());

app.post('/teams', validateName, validateInitials, validateCountry, async (req, res) => {
  try{
    const teams = await fs.readFile('teams.json', 'utf8');
    if (!teams) {
      const data = JSON.stringify(req.body, null, 2);
      await fs.writeFile('teams.json', `[${data}]`);
      return res.status(201).json({ message: `Created ${req.body.name}` });
    }
    const teamsArray = [...JSON.parse(teams), req.body];
    const data = JSON.stringify(teamsArray, null, 2);
    await fs.writeFile('teams.json', data);
    return res.status(201).json({ message: `Created ${req.body.name}` });
  } catch (err) {
    return res.status(500).json({ message: `Error: ${err}` });
  }
});

app.get('/teams', async (req, res) => {
  try{
    const data = await fs.readFile('teams.json', 'utf8');
  if (!data) {
    return res.status(200).json({ teams: [] });
  }
  const teams = JSON.parse(data);
    return res.status(200).json(teams);
  } catch (err) {
    return res.status(500).json({ message: `Error: ${err}` });
  }
});

app.listen(3005, () => console.log('Ouvindo na porta 3005'));
