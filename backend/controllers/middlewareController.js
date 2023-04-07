import Jwt from "jsonwebtoken";

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      Jwt.verify(accessToken, "secret", (err, user) => {
        if (err) {
          return res.status(403).json("Token is not valid");
        }
        req.user = user;
        next();
           });
    } else {
      return res.status(401).json("You are not authenticated");
    }
    //   const accessToken = token.split(" ")[1];
    //   Jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
    //     if (err) {
    //       return res.status(403).json("Token is not valid");
    //     }
    //     req.user = user;
    //     next();
    //   });
    // } else {
    //   return res.status(401).json("You are not authenticated");
    // }
  },
  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id == req.params.id || req.user.admin) {
        next();
      } else {
        return res.status(403).json("You are not allowed to delete other");
      }
    });
  },
};
// authorize: (...roles) => {
//   return (req, res, next)=>{
//       console.log(req.user.roles);
//       if(!roles.includes(req.user.roles)){
//           return handleresult.showResult(res, 200, false, 'ban khong co quyen');
//       }
//       next();
//   }
// }

export default middlewareController;
