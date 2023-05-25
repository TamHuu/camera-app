import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";

export default function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                fullWidth
                label="Tên"
                {...register("firstname", { required: true })}
                error={!!errors.firstname}
                helperText={errors.firstname && "Tên đăng nhập là bắt buộc"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {" "}
              <TextField
                fullWidth
                label="Họ"
                {...register("lastname", { required: true })}
                error={!!errors.lastname}
                helperText={errors.lastname && "Tên đăng nhập là bắt buộc"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Địa chỉ email"
            {...register("email", { required: true })}
            error={!!errors.email}
            helperText={errors.email && "Tên đăng nhập là bắt buộc"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Mật khẩu"
            type="password"
            {...register("password", { required: true })}
            error={!!errors.password}
            helperText={errors.password && "Mật khẩu là bắt buộc"}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Đăng ký
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
