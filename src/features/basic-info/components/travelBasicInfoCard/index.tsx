import { Paper, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/LocationOn";
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
  const [openStartPicker, setOpenStartPicker] = useState(false);
  const [openEndPicker, setOpenEndPicker] = useState(false);

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
            <IconCover backgroundColor="#9c27b0">
              <CalendarTodayIcon sx={{ fontSize: 20, color: "#f3e5f5" }} />
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
          <TextField placeholder="例）沖縄リゾート旅行" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            目的地
          </Typography>
          <TextField placeholder="例）沖縄" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            開始日
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
            <DatePicker
              value={startDate}
              onChange={handleStartDateChange}
              maxDate={endDate || undefined}
              format="YYYY/MM/DD"
              open={openStartPicker}
              onOpen={() => setOpenStartPicker(true)}
              onClose={() => setOpenStartPicker(false)}
              enableAccessibleFieldDOMStructure={false}
              slots={{
                textField: TextField,
              }}
              slotProps={{
                textField: {
                  onClick: () => setOpenStartPicker(true),
                  onMouseDown: (e: React.MouseEvent) => {
                    e.preventDefault();
                    setOpenStartPicker(true);
                  },
                  inputProps: {
                    readOnly: true,
                    style: {
                      cursor: "pointer",
                      caretColor: "transparent",
                    },
                  },
                  sx: {
                    "& .MuiInputBase-input": {
                      cursor: "pointer",
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                      "&::selection": {
                        backgroundColor: "transparent",
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
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
            <DatePicker
              value={endDate}
              onChange={handleEndDateChange}
              minDate={startDate || undefined}
              format="YYYY/MM/DD"
              open={openEndPicker}
              onOpen={() => setOpenEndPicker(true)}
              onClose={() => setOpenEndPicker(false)}
              enableAccessibleFieldDOMStructure={false}
              slots={{
                textField: TextField,
              }}
              slotProps={{
                textField: {
                  onClick: () => setOpenEndPicker(true),
                  onMouseDown: (e: React.MouseEvent) => {
                    e.preventDefault();
                    setOpenEndPicker(true);
                  },
                  inputProps: {
                    readOnly: true,
                    style: {
                      cursor: "pointer",
                      caretColor: "transparent",
                    },
                  },
                  sx: {
                    "& .MuiInputBase-input": {
                      cursor: "pointer",
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                      "&::selection": {
                        backgroundColor: "transparent",
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
            説明（任意）
          </Typography>
          <TextField multiline rows={4} placeholder="この旅行について..." />
        </Box>
        <Box sx={{ marginTop: 3 }}></Box>
      </Paper>
    </Box>
  );
}
