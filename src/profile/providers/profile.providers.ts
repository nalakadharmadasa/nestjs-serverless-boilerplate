import { Connection } from "mongoose";
import { ProfileSchema } from "../schemas/profile.schema";

export const ProfileProviders = [
  {
    provide: "PROFILE_MODEL",
    useFactory: (connection: Connection) =>
    connection.model("Profile", ProfileSchema),
    inject: ["DATABASE_CONNECTION"],
  },
];
