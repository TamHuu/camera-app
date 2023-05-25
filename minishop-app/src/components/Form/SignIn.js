import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Grid } from "@mui/material";

export default function FormSignIn() {
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
          <TextField
            fullWidth
            label="Tên đăng nhập"
            {...register("username", { required: true })}
            error={!!errors.username}
            helperText={errors.username && "Tên đăng nhập là bắt buộc"}
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
            Đăng nhập
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
