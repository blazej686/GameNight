import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PlayersController } from "./controllers/PlayersController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: PlayersController,
    view: null

  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]