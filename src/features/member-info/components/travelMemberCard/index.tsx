import React, { useState } from "react";
import { Paper, Typography, Box, Fab, Chip, Avatar } from "@mui/material";
import IconCover from "@/ui/IconCover";
import TextField from "@/ui/TextFiled";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import GroupIcon from "@mui/icons-material/Group";

export default function TravelMemberCard() {
  const [memberInput, setMemberInput] = useState("");
  const [members, setMembers] = useState([
    { id: 1, name: "あなた", isCurrentUser: true },
    { id: 2, name: "ssss", isCurrentUser: false },
  ]);

  const handleAddMember = () => {
    if (memberInput.trim()) {
      setMembers([
        ...members,
        {
          id: Date.now(),
          name: memberInput.trim(),
          isCurrentUser: false,
        },
      ]);
      setMemberInput("");
    }
  };

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddMember();
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginTop: 3 }}>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconCover backgroundColor="#7800e8">
            <GroupIcon sx={{ fontSize: 20, color: "#d2bae8" }} />
          </IconCover>
          <Typography variant="body1" fontWeight="800">
            メンバー
          </Typography>
        </Box>
        <Typography
          variant="body2"
          fontWeight="400"
          sx={{ marginTop: 1, color: "text.secondary" }}
        >
          一緒に旅行するメンバーを追加してください
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginTop: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2" fontWeight="500">
            メンバーを追加
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              placeholder="メンバー名を入力"
              value={memberInput}
              onChange={(e) => setMemberInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Fab
              color="secondary"
              aria-label="add"
              onClick={handleAddMember}
              sx={{
                minWidth: 40,
                minHeight: 40,
                width: 40,
                height: 40,
                padding: 0,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: 1,
                },
              }}
            >
              <AddIcon sx={{ fontSize: 20 }} />
            </Fab>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: 3 }}>
        <Typography variant="body2" fontWeight="500">
          現在のメンバー ({members.length}人)
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginTop: 1 }}>
          {members.map((member) => (
            <Chip
              key={member.id}
              avatar={
                <Avatar
                  sx={{
                    bgcolor: member.isCurrentUser ? "#1976d2" : "#757575",
                    color: "#fff",
                    width: 24,
                    height: 24,
                    fontSize: "12px",
                  }}
                >
                  {member.name.charAt(0).toUpperCase()}
                </Avatar>
              }
              label={
                member.isCurrentUser ? `${member.name}　幹事` : member.name
              }
              onDelete={
                member.isCurrentUser
                  ? undefined
                  : () => handleRemoveMember(member.id)
              }
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
