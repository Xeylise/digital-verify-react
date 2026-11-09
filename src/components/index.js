/**
 * @file index.js
 * @description Central export index for all atomic, molecular, and organism React components.
 * Structured by functional domains (Authentication, Identity Verification, Document Management,
 * Case Review, Process Tracking, Notifications, and Common Core UI).
 * Follows enterprise Clean Code and Modular Component Architecture standards.
 */

// ==========================================
// Domain: Authentication & Access Control
// ==========================================
export { default as LoginForm } from './auth/LoginForm';
export { default as RegisterForm } from './auth/RegisterForm';
export { default as PasswordRecoveryForm } from './auth/PasswordRecoveryForm';
export { default as InputField } from './common/InputField';
export { default as FormButton } from './common/FormButton';

// ==========================================
// Domain: Identity Verification & KYC Flow
// ==========================================
export { default as KYCForm } from './kyc/KYCForm';
export { default as KYCStep } from './kyc/KYCStep';
export { default as ProgressIndicator } from './kyc/ProgressIndicator';
export { default as KYCConfirmation } from './kyc/KYCConfirmation';

// ==========================================
// Domain: Document Management & File Auditing
// ==========================================
export { default as DocumentUpload } from './documents/DocumentUpload';
export { default as FilePreview } from './documents/FilePreview';
export { default as DocumentList } from './documents/DocumentList';
export { default as DocumentViewer } from './documents/DocumentViewer';
export { default as UploadStatus } from './documents/UploadStatus';

// ==========================================
// Domain: Audit Queue, Review & Decisions
// ==========================================
export { default as VerificationList } from './verification/VerificationList';
export { default as VerificationDetail } from './verification/VerificationDetail';
export { default as AssignmentForm } from './verification/AssignmentForm';
export { default as ReviewPanel } from './verification/ReviewPanel';
export { default as DecisionForm } from './verification/DecisionForm';
export { default as ObservationField } from './verification/ObservationField';

// ==========================================
// Domain: Tracking, Metrics & Status Monitoring
// ==========================================
export { default as VerificationStatus } from './tracking/VerificationStatus';
export { default as ProgressTracker } from './tracking/ProgressTracker';
export { default as RequestDashboard } from './tracking/RequestDashboard';
export { default as StatusFilter } from './tracking/StatusFilter';
export { default as RequestHistory } from './tracking/RequestHistory';

// ==========================================
// Domain: Notifications & Alerts
// ==========================================
export { default as NotificationList } from './notifications/NotificationList';
export { default as NotificationItem } from './notifications/NotificationItem';
export { default as NotificationBadge } from './notifications/NotificationBadge';
export { default as NotificationDetail } from './notifications/NotificationDetail';

// ==========================================
// Domain: Transversal Shared Layout & UI Components
// ==========================================
export { default as Header } from './common/Header';
export { default as Sidebar } from './common/Sidebar';
export { default as MainLayout } from './common/MainLayout';
export { default as LoadingSpinner } from './common/LoadingSpinner';
export { default as ConfirmationModal } from './common/ConfirmationModal';
export { default as AlertMessage } from './common/AlertMessage';
