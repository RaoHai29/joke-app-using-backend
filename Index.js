import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/facebook', (req, res) => {
//     res.send('Hello Facebook!')
// })

const jokes = [
  { id: 1, setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { id: 2, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 3, setup: "What do you call a fish with no eyes?", punchline: "Fsh!" },
  { id: 4, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 5, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 6, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { id: 7, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 8, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 9, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 10, setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { id: 11, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 12, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 13, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 14, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { id: 15, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 16, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 17, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 18, setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { id: 19, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 20, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 21, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 22, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { id: 23, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 24, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 25, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 26, setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { id: 27, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 28, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 29, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 30, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { id: 31, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 32, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 33, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 34, setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { id: 35, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 36, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 37, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 38, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { id: 39, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 40, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 41, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 42, setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { id: 43, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 44, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 45, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 46, setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field." },
  { id: 47, setup: "What do you call a lazy kangaroo?", punchline: "A pouch potato." },
  { id: 48, setup: "I tried to catch some fog yesterday, but I mist.", punchline: "I'm so foggy!" },
  { id: 49, setup: "What do you call a cow that doesn't give milk?", punchline: "A beefcake." },
  { id: 50, setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" }
];

app.get('/api/jokes', (req, res) => {
  res.json(jokes)
})
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
