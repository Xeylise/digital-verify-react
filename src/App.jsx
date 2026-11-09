import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { KycProvider } from './context/KycContext';
import { NotificationProvider } from './context/NotificationContext';

// Templates
import PlayerLayout from './components/templates/PlayerLayout';
import BackofficeLayout from './components/templates/BackofficeLayout';

// Client Pages
import LandingPage from './pages/client/LandingPage';
import HomePage from './pages/client/HomePage';
import StartKycPage from './pages/client/StartKycPage';
import UploadIdPage from './pages/client/UploadIdPage';
import ProofOfAddressPage from './pages/client/ProofOfAddressPage';
import KycStatusReviewPage from './pages/client/KycStatusReviewPage';
import NotificationsPage from './pages/client/NotificationsPage';
import ProfilePage from './pages/client/ProfilePage';
import SettingsPage from './pages/client/SettingsPage';
import MyBetsPage from './pages/client/MyBetsPage';

// Backoffice Pages
import LoginEmployeePage from './pages/backoffice/LoginEmployeePage';
import DashboardPage from './pages/backoffice/DashboardPage';
import QueuePage from './pages/backoffice/QueuePage';
import AllCasesPage from './pages/backoffice/AllCasesPage';
import ActivityLogPage from './pages/backoffice/ActivityLogPage';
import ReportsPage from './pages/backoffice/ReportsPage';
import SettingsEmployeePage from './pages/backoffice/SettingsEmployeePage';
import CasePage from './pages/backoffice/CasePage';

export default function App() {
  return (
    <AuthProvider>
      <KycProvider>
        <NotificationProvider>
          <BrowserRouter>
            <Routes>
              {/* 1. Public Landing Page (WinArena) */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/index.html" element={<LandingPage />} />

              {/* 2. Employee Login Landing */}
              <Route path="/login_employee" element={<LoginEmployeePage />} />
              <Route path="/login_employee.html" element={<LoginEmployeePage />} />
              <Route path="/admin/login" element={<LoginEmployeePage />} />

              {/* 3. Player Flow inside PlayerLayout */}
              <Route element={<PlayerLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/home.html" element={<HomePage />} />
                <Route path="/start_kyc" element={<StartKycPage />} />
                <Route path="/start_kyc.html" element={<StartKycPage />} />
                <Route path="/upload_id" element={<UploadIdPage />} />
                <Route path="/upload_id.html" element={<UploadIdPage />} />
                <Route path="/proof_of_address" element={<ProofOfAddressPage />} />
                <Route path="/proof_of_address.html" element={<ProofOfAddressPage />} />
                <Route path="/kyc_status_review" element={<KycStatusReviewPage />} />
                <Route path="/kyc_status_review.html" element={<KycStatusReviewPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/notifications.html" element={<NotificationsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile.html" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/settings.html" element={<SettingsPage />} />
                <Route path="/my_bets" element={<MyBetsPage />} />
                <Route path="/my_bets.html" element={<MyBetsPage />} />
              </Route>

              {/* 4. Backoffice Flow inside BackofficeLayout */}
              <Route element={<BackofficeLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard.html" element={<DashboardPage />} />
                <Route path="/admin/dashboard" element={<DashboardPage />} />

                <Route path="/queue" element={<QueuePage />} />
                <Route path="/queue.html" element={<QueuePage />} />
                <Route path="/admin/queue" element={<QueuePage />} />

                <Route path="/all-cases" element={<AllCasesPage />} />
                <Route path="/all-cases.html" element={<AllCasesPage />} />
                <Route path="/all_cases.html" element={<AllCasesPage />} />
                <Route path="/admin/all-cases" element={<AllCasesPage />} />

                <Route path="/activity_log" element={<ActivityLogPage />} />
                <Route path="/activity_log.html" element={<ActivityLogPage />} />
                <Route path="/admin/activity_log" element={<ActivityLogPage />} />

                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/reports.html" element={<ReportsPage />} />
                <Route path="/admin/reports" element={<ReportsPage />} />

                <Route path="/settings_employee" element={<SettingsEmployeePage />} />
                <Route path="/settings_employee.html" element={<SettingsEmployeePage />} />
                <Route path="/admin/settings_employee" element={<SettingsEmployeePage />} />

                <Route path="/case" element={<CasePage />} />
                <Route path="/case.html" element={<CasePage />} />
                <Route path="/admin/case" element={<CasePage />} />
              </Route>

              {/* Fallback to Landing */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </KycProvider>
    </AuthProvider>
  );
}
