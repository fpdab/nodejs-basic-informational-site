import http from "http"
import fs from "fs/promises"
import path from "path"
const PORT = process.env.PORT

const dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" })
    const file = await fs.readFile(
      path.join(dirname, "public", "index.html"),
      "utf8"
    )
    res.write(file)
    res.end()
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" })
    const file = await fs.readFile(
      path.join(dirname, "public", "about.html"),
      "utf8"
    )
    res.write(file)
    res.end()
  } else if (req.url === "/contact-me") {
    res.writeHead(200, { "Content-Type": "text/html" })
    const file = await fs.readFile(
      path.join(dirname, "public", "contact-me.html"),
      "utf8"
    )
    res.write(file)
    res.end()
  } else {
    res.writeHead(404, { "Content-Type": "text/html" })
    const file = await fs.readFile(
      path.join(dirname, "public", "404.html"),
      "utf8"
    )
    res.write(file)
    res.end()
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
