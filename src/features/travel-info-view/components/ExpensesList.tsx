import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  CardActionArea,
  IconButton,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Popover,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CalculateIcon from "@mui/icons-material/Calculate";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import ExpenseDetail from "./ExpenseDetail";

interface Expense {
  id: string;
  emoji: string;
  title: string;
  category: string;
  description: string;
  location: string;
  amount: number;
  peopleCount: number;
  date: string;
}

const ExpensesList: React.FC = () => {
  const [selectedExpense, setSelectedExpense] = useState<Expense | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: "1",
      emoji: "🚌",
      title: "ランチ",
      category: "食事",
      description: "支払: 佐藤さん",
      location: "京料理レストラン",
      amount: 8000,
      peopleCount: 4,
      date: "2024/3/16",
    },
    {
      id: "2",
      emoji: "✈️",
      title: "新幹線チケット",
      category: "交通費",
      description: "支払: あなた",
      location: "東京-京都 往復",
      amount: 52000,
      peopleCount: 4,
      date: "2024/3/15",
    },
    {
      id: "3",
      emoji: "🏨",
      title: "ホテル宿泊費",
      category: "宿泊費",
      description: "支払: 田中さん",
      location: "",
      amount: 32000,
      peopleCount: 4,
      date: "2024/3/15",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [formData, setFormData] = useState<Partial<Expense>>({
    emoji: "💰",
    title: "",
    category: "",
    description: "",
    location: "",
    amount: 0,
    peopleCount: 1,
    date: new Date().toLocaleDateString("ja-JP").replace(/\//g, "/"),
  });
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleAddExpense = () => {
    setEditingExpense(null);
    setFormData({
      emoji: "💰",
      title: "",
      category: "",
      description: "",
      location: "",
      amount: 0,
      peopleCount: 1,
      date: new Date().toLocaleDateString("ja-JP").replace(/\//g, "/"),
    });
    setOpenDialog(true);
  };

  const handleEditExpense = (expense: Expense) => {
    setEditingExpense(expense);
    setFormData(expense);
    setOpenDialog(true);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const handleSaveExpense = () => {
    if (editingExpense) {
      setExpenses(
        expenses.map((exp) =>
          exp.id === editingExpense.id
            ? ({ ...formData, id: exp.id } as Expense)
            : exp
        )
      );
    } else {
      const newExpense: Expense = {
        ...formData,
        id: Date.now().toString(),
      } as Expense;
      setExpenses([...expenses, newExpense]);
    }
    setOpenDialog(false);
  };

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    setFormData({ ...formData, emoji: emojiObject.emoji });
    setShowEmojiPicker(false);
  };

  const handleCardClick = (expense: Expense) => {
    setSelectedExpense(expense);
    setShowDetail(true);
  };

  const handleBackFromDetail = () => {
    setShowDetail(false);
    setSelectedExpense(null);
  };

  const handleEditFromDetail = () => {
    if (selectedExpense) {
      handleEditExpense(selectedExpense);
      setShowDetail(false);
    }
  };

  const handleDeleteFromDetail = () => {
    if (selectedExpense) {
      handleDeleteExpense(selectedExpense.id);
      setShowDetail(false);
      setSelectedExpense(null);
    }
  };

  const handleCalculateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalculateClose = () => {
    setAnchorEl(null);
  };

  const calculateBalances = () => {
    const balances: { [key: string]: number } = {
      あなた: 0,
      田中さん: 0,
      佐藤さん: 0,
      鈴木さん: 0,
    };

    const totalSpent: { [key: string]: number } = {
      あなた: 0,
      田中さん: 0,
      佐藤さん: 0,
      鈴木さん: 0,
    };

    expenses.forEach((expense) => {
      const perPerson = expense.amount / expense.peopleCount;
      const payer =
        expense.description === "支払: あなた"
          ? "あなた"
          : expense.description === "支払: 田中さん"
          ? "田中さん"
          : expense.description === "支払: 佐藤さん"
          ? "佐藤さん"
          : "鈴木さん";

      // 支払った人にプラス
      balances[payer] += expense.amount;
      totalSpent[payer] += expense.amount;

      // 全員から均等にマイナス
      Object.keys(balances).forEach((person) => {
        if (expense.peopleCount === 4 || person === payer) {
          balances[person] -= perPerson;
        }
      });
    });

    return { balances, totalSpent };
  };

  const { balances } = calculateBalances();
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const open = Boolean(anchorEl);

  if (showDetail && selectedExpense) {
    return (
      <ExpenseDetail
        expense={selectedExpense}
        onBack={handleBackFromDetail}
        onEdit={handleEditFromDetail}
        onDelete={handleDeleteFromDetail}
      />
    );
  }

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 1, mb: 1.5, px: 1 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<AddIcon sx={{ fontSize: 16 }} />}
          onClick={handleAddExpense}
          sx={{
            borderRadius: 1.5,
            py: 1,
            fontSize: "0.875rem",
          }}
        >
          支出を追加
        </Button>
        <IconButton
          onClick={handleCalculateClick}
          sx={{
            border: "1px solid #E0E0E0",
            borderRadius: 1.5,
            width: 48,
            height: 40,
            "&:hover": {
              backgroundColor: "#F5F5F5",
            },
          }}
        >
          <CalculateIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleCalculateClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              width: 320,
              mt: 1,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <CalculateIcon sx={{ fontSize: 20, color: "#0361e3" }} />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, fontSize: "0.9rem" }}
            >
              精算計算
            </Typography>
          </Box>

          {/* 総支出 */}
          <Box
            sx={{
              backgroundColor: "#F5F5F5",
              borderRadius: 1,
              p: 1.5,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AttachMoneyIcon sx={{ fontSize: 18, color: "#4CAF50" }} />
              <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                総支出
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              ¥{totalExpenses.toLocaleString()}
            </Typography>
          </Box>

          {/* 一人当たり */}
          <Box
            sx={{
              backgroundColor: "#E3F2FD",
              borderRadius: 1,
              p: 1.5,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <GroupIcon sx={{ fontSize: 18, color: "#2196F3" }} />
              <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                一人当たり
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              ¥{Math.floor(totalExpenses / 4).toLocaleString()}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* 個人別精算 */}
          <List sx={{ p: 0 }}>
            {Object.entries(balances).map(([person, balance]) => {
              const avatarLetter = person[0];
              const bgColor =
                person === "あなた"
                  ? "#1976D2"
                  : person === "田中さん"
                  ? "#9C27B0"
                  : person === "佐藤さん"
                  ? "#F57C00"
                  : "#388E3C";

              return (
                <ListItem key={person} sx={{ px: 0, py: 0.75 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Avatar
                      sx={{
                        width: 28,
                        height: 28,
                        fontSize: "0.75rem",
                        backgroundColor: bgColor,
                        color: "#fff",
                      }}
                    >
                      {avatarLetter}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={person}
                    primaryTypographyProps={{ fontSize: "0.85rem" }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color:
                        balance > 0
                          ? "#4CAF50"
                          : balance < 0
                          ? "#F44336"
                          : "#757575",
                    }}
                  >
                    {balance > 0 ? "+" : ""}¥
                    {Math.round(balance).toLocaleString()}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Popover>

      <Stack spacing={0.75} sx={{ px: 1 }}>
        {expenses.map((expense) => (
          <Card key={expense.id}>
            <CardActionArea onClick={() => handleCardClick(expense)}>
              <CardContent
                sx={{ px: 1.5, py: 0.75, "&:last-child": { pb: 0.75 } }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      flex: 1,
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 1,
                        backgroundColor: "#E3F2FD",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{ fontSize: "1.1rem" }}
                      >
                        {expense.emoji}
                      </Typography>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          mb: 0.25,
                        }}
                      >
                        <Typography
                          variant="body2"
                          component="div"
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.8rem",
                          }}
                        >
                          {expense.title}
                        </Typography>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                      >
                        <Box
                          sx={{
                            backgroundColor: "#F5F5F5",
                            borderRadius: 0.5,
                            px: 0.75,
                            py: 0.15,
                            display: "inline-block",
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "0.65rem",
                              color: "text.secondary",
                            }}
                          >
                            {expense.category}
                          </Typography>
                        </Box>
                        {expense.description && (
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: "0.65rem" }}
                          >
                            • {expense.description}
                          </Typography>
                        )}
                      </Box>

                      {expense.location && (
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            fontSize: "0.65rem",
                            display: "block",
                            mt: 0.25,
                          }}
                        >
                          {expense.location}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        textAlign: "right",
                      }}
                    >
                      ¥{expense.amount.toLocaleString()}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        fontSize: "0.65rem",
                        textAlign: "right",
                        display: "block",
                      }}
                    >
                      一人 ¥
                      {Math.floor(
                        expense.amount / expense.peopleCount
                      ).toLocaleString()}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxWidth: 360,
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            pb: 1,
            pt: 2,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {editingExpense ? "支出を編集" : "新しい支出を追加"}
          <IconButton
            size="small"
            onClick={() => setOpenDialog(false)}
            sx={{ p: 0 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ px: 2, pb: 1 }}>
          <Stack spacing={2} sx={{ mt: 0.5 }}>
            {/* 支出項目 */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.7rem",
                  color: "text.secondary",
                  mb: 0.5,
                  display: "block",
                }}
              >
                支出項目
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Box
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 1,
                    border: "1px solid #E0E0E0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundColor: "#F5F5F5",
                    "&:hover": {
                      backgroundColor: "#EEEEEE",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "1.5rem" }}>
                    {formData.emoji}
                  </Typography>
                </Box>
                {showEmojiPicker && (
                  <Box sx={{ position: "absolute", zIndex: 1000, mt: 7 }}>
                    <EmojiPicker
                      onEmojiClick={handleEmojiClick}
                      width={300}
                      height={400}
                    />
                  </Box>
                )}
                <TextField
                  placeholder="例：ランチ代"
                  fullWidth
                  size="small"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#F5F5F5",
                      "& fieldset": {
                        borderColor: "#E0E0E0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#0361e3",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#0361e3",
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* 金額とカテゴリー */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.7rem",
                    color: "text.secondary",
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  金額（円）
                </Typography>
                <TextField
                  type="number"
                  placeholder="5000"
                  fullWidth
                  size="small"
                  value={formData.amount || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: Number(e.target.value) })
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#F5F5F5",
                      "& fieldset": {
                        borderColor: "#E0E0E0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#0361e3",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#0361e3",
                      },
                    },
                  }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.7rem",
                    color: "text.secondary",
                    mb: 0.5,
                    display: "block",
                  }}
                >
                  カテゴリー
                </Typography>
                <Select
                  fullWidth
                  size="small"
                  value={formData.category || "その他"}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  sx={{
                    backgroundColor: "#F5F5F5",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#E0E0E0",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0361e3",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0361e3",
                    },
                  }}
                >
                  <MenuItem value="食事">食事</MenuItem>
                  <MenuItem value="交通費">交通費</MenuItem>
                  <MenuItem value="宿泊費">宿泊費</MenuItem>
                  <MenuItem value="観光">観光</MenuItem>
                  <MenuItem value="買い物">買い物</MenuItem>
                  <MenuItem value="その他">その他</MenuItem>
                </Select>
              </Box>
            </Box>

            {/* 支払者 */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.7rem",
                  color: "text.secondary",
                  mb: 0.5,
                  display: "block",
                }}
              >
                支払者
              </Typography>
              <Select
                fullWidth
                size="small"
                value={formData.description || "あなた"}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                sx={{
                  backgroundColor: "#F5F5F5",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E0E0E0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0361e3",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#0361e3",
                  },
                }}
              >
                <MenuItem value="あなた">あなた</MenuItem>
                <MenuItem value="田中さん">田中さん</MenuItem>
                <MenuItem value="佐藤さん">佐藤さん</MenuItem>
                <MenuItem value="鈴木さん">鈴木さん</MenuItem>
              </Select>
            </Box>

            {/* 分割対象メンバー */}
            <Box>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.7rem",
                  color: "text.secondary",
                  mb: 0.5,
                  display: "block",
                }}
              >
                分割対象メンバー
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      size="small"
                      sx={{
                        color: "#0361e3",
                        "&.Mui-checked": { color: "#0361e3" },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "0.8rem" }}>あなた</Typography>
                  }
                  sx={{ m: 0 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      size="small"
                      sx={{
                        color: "#0361e3",
                        "&.Mui-checked": { color: "#0361e3" },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      田中さん
                    </Typography>
                  }
                  sx={{ m: 0 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      size="small"
                      sx={{
                        color: "#0361e3",
                        "&.Mui-checked": { color: "#0361e3" },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      佐藤さん
                    </Typography>
                  }
                  sx={{ m: 0 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      size="small"
                      sx={{
                        color: "#0361e3",
                        "&.Mui-checked": { color: "#0361e3" },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      鈴木さん
                    </Typography>
                  }
                  sx={{ m: 0 }}
                />
              </Box>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 2, pb: 2, pt: 1, gap: 1 }}>
          <Button
            onClick={() => setOpenDialog(false)}
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: 1,
              textTransform: "none",
              fontSize: "0.875rem",
              py: 1,
            }}
          >
            キャンセル
          </Button>
          <Button
            onClick={handleSaveExpense}
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              borderRadius: 1,
              textTransform: "none",
              fontSize: "0.875rem",
              py: 1,
            }}
          >
            追加
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ExpensesList;
