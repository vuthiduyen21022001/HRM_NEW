import express from "express";
// import middlewareController from "../controllers/middlewareController.js";

import {
  addDepartment,
  deleteDepartment,
  editDepartment,
  getDepartment,
} from "../controllers/departmentController.js";
const departmentRoute = express.Router();

departmentRoute.post("/ThemPhongBan", addDepartment);
departmentRoute.get("/LayDanhSachPhongBan", getDepartment);
departmentRoute.delete("/XoaPhongBan/:id", deleteDepartment);
// departmentRoute.delete("/XoaPhongBan/:id", checkUserRole, deleteDepartment);

departmentRoute.put("/CapNhapThongTinPhongBan/:id", editDepartment);

export default departmentRoute;
