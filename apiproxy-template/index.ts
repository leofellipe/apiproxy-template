import app from './src/app'

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server successfully running on PORT ${process.env.PORT || 3000}`)
})
