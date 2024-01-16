import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections and listeneres
const PORT = process.env.PORT || 3000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Connected to database"));
})
    .catch((err) => console.log(err));
//npm run dev
//# sourceMappingURL=index.js.map