import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
  alpha
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Description as DescriptionIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  Schedule as ScheduleIcon,
  Download as DownloadIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Share as ShareIcon
} from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';

const Analytics = () => {
  const theme = useTheme();
  const { currentUser } = useAuth();
  const [timeRange, setTimeRange] = useState('30');
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalDocuments: 156,
      documentsThisMonth: 24,
      totalCompanies: 8,
      activeUsers: 12,
      documentGrowth: 15.3,
      companyGrowth: 25.0,
      userGrowth: 8.7
    },
    documentTypes: [
      { name: 'Offer Letters', count: 45, percentage: 28.8, color: '#1976d2' },
      { name: 'Employment Verification', count: 38, percentage: 24.4, color: '#2e7d32' },
      { name: 'Experience Letters', count: 32, percentage: 20.5, color: '#ed6c02' },
      { name: 'Salary Certificates', count: 25, percentage: 16.0, color: '#9c27b0' },
      { name: 'Other Documents', count: 16, percentage: 10.3, color: '#d32f2f' }
    ],
    recentActivity: [
      {
        id: 1,
        action: 'Document Created',
        document: 'Offer Letter - John Doe',
        user: 'Admin User',
        timestamp: '2 hours ago',
        type: 'create'
      },
      {
        id: 2,
        action: 'Document Downloaded',
        document: 'Employment Verification - Jane Smith',
        user: 'HR Manager',
        timestamp: '4 hours ago',
        type: 'download'
      },
      {
        id: 3,
        action: 'Company Added',
        document: 'Tech Solutions Pvt Ltd',
        user: 'Admin User',
        timestamp: '1 day ago',
        type: 'company'
      },
      {
        id: 4,
        action: 'Document Edited',
        document: 'Salary Certificate - Mike Johnson',
        user: 'HR Assistant',
        timestamp: '2 days ago',
        type: 'edit'
      },
      {
        id: 5,
        action: 'Document Shared',
        document: 'Experience Letter - Sarah Wilson',
        user: 'Team Lead',
        timestamp: '3 days ago',
        type: 'share'
      }
    ],
    topCompanies: [
      { name: 'Tech Solutions Pvt Ltd', documents: 45, growth: 12.5 },
      { name: 'Digital Innovations Inc', documents: 38, growth: 8.3 },
      { name: 'Software Systems Ltd', documents: 32, growth: 15.7 },
      { name: 'Data Analytics Corp', documents: 25, growth: -2.1 },
      { name: 'Cloud Services Pvt Ltd', documents: 16, growth: 22.4 }
    ],
    monthlyTrends: [
      { month: 'Jan', documents: 12, users: 8 },
      { month: 'Feb', documents: 18, users: 9 },
      { month: 'Mar', documents: 25, users: 10 },
      { month: 'Apr', documents: 32, users: 11 },
      { month: 'May', documents: 28, users: 12 },
      { month: 'Jun', documents: 41, users: 12 }
    ]
  };

  const getActionIcon = (type) => {
    switch (type) {
      case 'create':
        return <DescriptionIcon sx={{ color: 'success.main' }} />;
      case 'download':
        return <DownloadIcon sx={{ color: 'info.main' }} />;
      case 'edit':
        return <EditIcon sx={{ color: 'warning.main' }} />;
      case 'share':
        return <ShareIcon sx={{ color: 'primary.main' }} />;
      case 'company':
        return <BusinessIcon sx={{ color: 'secondary.main' }} />;
      default:
        return <VisibilityIcon sx={{ color: 'text.secondary' }} />;
    }
  };

  const StatCard = ({ title, value, subtitle, growth, icon, color }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, color }}>
              {value}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: alpha(color, 0.1),
              color
            }}
          >
            {icon}
          </Box>
        </Box>
        {growth !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            {growth >= 0 ? (
              <TrendingUpIcon sx={{ color: 'success.main', mr: 1 }} />
            ) : (
              <TrendingDownIcon sx={{ color: 'error.main', mr: 1 }} />
            )}
            <Typography
              variant="body2"
              sx={{
                color: growth >= 0 ? 'success.main' : 'error.main',
                fontWeight: 600
              }}
            >
              {Math.abs(growth)}% {growth >= 0 ? 'increase' : 'decrease'}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              from last month
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Analytics Dashboard
          </Typography>
          <LinearProgress sx={{ mt: 2 }} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Page Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Analytics Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track your document generation and usage statistics
          </Typography>
        </Box>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Time Range</InputLabel>
          <Select
            value={timeRange}
            label="Time Range"
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <MenuItem value="7">Last 7 days</MenuItem>
            <MenuItem value="30">Last 30 days</MenuItem>
            <MenuItem value="90">Last 3 months</MenuItem>
            <MenuItem value="365">Last year</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Overview Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Documents"
            value={analyticsData.overview.totalDocuments}
            subtitle="All time generated"
            growth={analyticsData.overview.documentGrowth}
            icon={<DescriptionIcon />}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="This Month"
            value={analyticsData.overview.documentsThisMonth}
            subtitle="Documents created"
            growth={analyticsData.overview.documentGrowth}
            icon={<ScheduleIcon />}
            color={theme.palette.success.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Companies"
            value={analyticsData.overview.totalCompanies}
            subtitle="Registered companies"
            growth={analyticsData.overview.companyGrowth}
            icon={<BusinessIcon />}
            color={theme.palette.warning.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Users"
            value={analyticsData.overview.activeUsers}
            subtitle="This month"
            growth={analyticsData.overview.userGrowth}
            icon={<PeopleIcon />}
            color={theme.palette.secondary.main}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Document Types Distribution */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Document Types Distribution
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {analyticsData.documentTypes.map((type, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {type.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {type.count} ({type.percentage}%)
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={type.percentage}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: alpha(type.color, 0.1),
                      '& .MuiLinearProgress-bar': {
                        bgcolor: type.color,
                        borderRadius: 4
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Top Companies */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Top Companies by Documents
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {analyticsData.topCompanies.map((company, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: 'primary.main',
                        fontSize: '0.875rem',
                        mr: 2
                      }}
                    >
                      {company.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {company.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {company.documents} documents
                      </Typography>
                    </Box>
                  </Box>
                  <Chip
                    label={`${company.growth >= 0 ? '+' : ''}${company.growth}%`}
                    size="small"
                    color={company.growth >= 0 ? 'success' : 'error'}
                    variant="outlined"
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Recent Activity
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Action</TableCell>
                    <TableCell>Document/Item</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {analyticsData.recentActivity.map((activity) => (
                    <TableRow key={activity.id} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {getActionIcon(activity.type)}
                          <Typography variant="body2" sx={{ ml: 1, fontWeight: 500 }}>
                            {activity.action}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {activity.document}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ width: 24, height: 24, mr: 1, fontSize: '0.75rem' }}>
                            {activity.user.charAt(0)}
                          </Avatar>
                          <Typography variant="body2">
                            {activity.user}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {activity.timestamp}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Tooltip title="View Details">
                          <IconButton size="small">
                            <VisibilityIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;