import React, { useState } from "react";
import { Paper, Typography, Box, TextField, IconButton, Chip, Avatar } from "@mui/material";
import IconCover from "@/ui/IconCover";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";

export default function TravelMemberCard() {
  const [memberInput, setMemberInput] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "あなた", isCurrentUser: true },
    { id: 2, name: "ssss", isCurrentUser: false }
  ]);

  const handleAddMember = () => {
    if (memberInput.trim()) {
      setMembers([...members, { 
        id: Date.now(), 
        name: memberInput.trim(), 
        isCurrentUser: false 
      }]);
      setMemberInput("");
    }
  };

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddMember();
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, marginTop: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconCover backgroundColor="#7800e8">
          <GroupIcon sx={{ fontSize: 20, color: "#d2bae8" }} />
        </IconCover>
        <Typography variant="body1" fontWeight="800">
          メンバー
        </Typography>
      </Box>
      <Typography variant="body2" fontWeight="400">
        一緒に旅行するメンバーを追加してください
      </Typography>
      
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body2" fontWeight="400" sx={{ marginBottom: 1 }}>
          メンバーを追加
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            placeholder="メンバー名を入力"
            value={memberInput}
            onChange={(e) => setMemberInput(e.target.value)}
            onKeyPress={handleKeyPress}
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: "#bdbdbd",
                },
              },
            }}
          />
          <IconButton 
            onClick={handleAddMember}
            sx={{ 
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="body2" fontWeight="400" sx={{ marginBottom: 1 }}>
          現在のメンバー ({members.length}人)
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {members.map((member) => (
            <Chip
              key={member.id}
              avatar={
                <Avatar sx={{ 
                  bgcolor: member.isCurrentUser ? "#1976d2" : "#757575",
                  width: 24,
                  height: 24,
                  fontSize: "12px"
                }}>
                  {member.name.charAt(0).toUpperCase()}
                </Avatar>
              }
              label={member.isCurrentUser ? `${member.name}　幹事` : member.name}
              onDelete={member.isCurrentUser ? undefined : () => handleRemoveMember(member.id)}
              deleteIcon={<CloseIcon />}
              sx={{
                backgroundColor: member.isCurrentUser ? "#e3f2fd" : "#f5f5f5",
                "& .MuiChip-deleteIcon": {
                  color: "#757575",
                  "&:hover": {
                    color: "#424242",
                  },
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
