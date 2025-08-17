import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  Button,
  Paper,
  Avatar,
  Chip,
  Stack,
  Divider
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface ExpenseDetailProps {
  expense: {
    id: string;
    emoji: string;
    title: string;
    category: string;
    description: string;
    location: string;
    amount: number;
    peopleCount: number;
    date: string;
    payer?: string;
    members?: string[];
    memo?: string;
  };
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ExpenseDetail: React.FC<ExpenseDetailProps> = ({ expense, onBack, onEdit, onDelete }) => {
  const splitMembers = expense.members || ['あなた', '田中さん', '佐藤さん', '鈴木さん'];
  
  return (
    <Box sx={{ p: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <IconButton onClick={onBack} sx={{ p: 0 }}>
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>
        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
          支出詳細
        </Typography>
        <Box sx={{ width: 24 }} />
      </Box>

      {/* Emoji and Category */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            backgroundColor: '#E3F2FD',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography sx={{ fontSize: '2rem' }}>{expense.emoji}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
            {expense.title}
          </Typography>
          <Chip 
            label={expense.category} 
            size="small" 
            sx={{ 
              height: 20,
              fontSize: '0.75rem',
              backgroundColor: '#E8EAF6',
              color: 'text.primary'
            }}
          />
        </Box>
      </Box>

      {/* Amount Card */}
      <Paper 
        elevation={0} 
        sx={{ 
          backgroundColor: '#F5F6FA',
          borderRadius: 2,
          p: 2,
          mb: 3,
          textAlign: 'center'
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '1.75rem', mb: 0.5 }}>
          ¥{expense.amount.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
          一人当たり ¥{Math.floor(expense.amount / expense.peopleCount).toLocaleString()}
        </Typography>
      </Paper>

      {/* Details */}
      <Stack spacing={2.5} sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CalendarTodayIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
              日付
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
              {expense.date}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PersonIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
              支払者
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                avatar={<Avatar sx={{ width: 20, height: 20, fontSize: '0.7rem' }}>佐</Avatar>}
                label={expense.payer || '佐藤さん'}
                size="small"
                sx={{ height: 24, fontSize: '0.75rem' }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <GroupIcon sx={{ fontSize: 20, color: 'text.secondary', mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
              分割対象メンバー　{expense.peopleCount}人
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
              {splitMembers.slice(0, expense.peopleCount).map((member, index) => (
                <Chip
                  key={index}
                  avatar={<Avatar sx={{ width: 20, height: 20, fontSize: '0.7rem' }}>{member[0]}</Avatar>}
                  label={member}
                  size="small"
                  sx={{ height: 24, fontSize: '0.75rem' }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {expense.location && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOnIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
            <Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                メモ
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                {expense.location}
              </Typography>
            </Box>
          </Box>
        )}
      </Stack>

      {/* Action Buttons */}
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<EditIcon sx={{ fontSize: 16 }} />}
          onClick={onEdit}
          sx={{
            borderRadius: 1.5,
            py: 1,
            fontSize: '0.875rem',
            borderColor: '#2196F3',
            color: '#2196F3',
            '&:hover': {
              borderColor: '#1976D2',
              backgroundColor: 'rgba(33, 150, 243, 0.04)'
            }
          }}
        >
          編集
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<DeleteIcon sx={{ fontSize: 16 }} />}
          onClick={onDelete}
          sx={{
            borderRadius: 1.5,
            py: 1,
            fontSize: '0.875rem',
            borderColor: '#F44336',
            color: '#F44336',
            '&:hover': {
              borderColor: '#D32F2F',
              backgroundColor: 'rgba(244, 67, 54, 0.04)'
            }
          }}
        >
          削除
        </Button>
      </Stack>
    </Box>
  );
};

export default ExpenseDetail;