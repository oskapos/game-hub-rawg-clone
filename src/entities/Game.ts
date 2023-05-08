import { Platform } from "./Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Array<Genre>;
  publishers: Array<Publisher>;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
