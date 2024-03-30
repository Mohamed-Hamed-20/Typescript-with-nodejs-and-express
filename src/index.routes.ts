import userRouter from "./user/user.routes";

export const bootstrap = (app: any, express: any) => {
  app.use(express.json());
const port: number = parseInt(process.env.PORT || "8000");
  console.log(process.env.port);
  
  app.use("/user", userRouter);
  app.listen(port, () => {
    console.log(`server running in port -----------${port}`);
  });
};
