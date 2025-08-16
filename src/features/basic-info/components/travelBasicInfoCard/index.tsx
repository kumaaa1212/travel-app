import { Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IconCover from "@/ui/IconCover";
import TextField from "@/ui/TextFiled";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Dayjs } from "dayjs";

export default function TravelBasicInfoCard() {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
    if (newValue && endDate && newValue.isAfter(endDate)) {
      setEndDate(newValue);
    }
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
    if (newValue && startDate && newValue.isBefore(startDate)) {
      setStartDate(newValue);
    }
  };
  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconCover backgroundColor="#06710a">
              <LocationOnIcon sx={{ fontSize: 20, color: "#ceedd0" }} />
            </IconCover>
            <Typography variant="body1" fontWeight="800">
              基本情報
            </Typography>
          </Box>
          <Typography
            variant="body2"
            fontWeight="400"
            sx={{ marginTop: 1, color: "text.secondary" }}
          >
            旅行の基本的な情報を入力してください
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            旅行タイトル
          </Typography>
          <TextField />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            旅行タイトル
          </Typography>
          <TextField />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            開始日
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={startDate}
              onChange={handleStartDateChange}
              maxDate={endDate || undefined}
              format="YYYY/MM/DD"
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f9fafb",
                      "&:hover fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                        borderWidth: 2,
                      },
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            終了日
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={endDate}
              onChange={handleEndDateChange}
              minDate={startDate || undefined}
              format="YYYY/MM/DD"
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      backgroundColor: "#f9fafb",
                      "&:hover fieldset": {
                        borderColor: "secondary.main",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "secondary.main",
                        borderWidth: 2,
                      },
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ marginTop: 3 }}></Box>
      </Paper>
    </Box>
  );
}
