import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="*" replace />;
  }
  
  return <>{children}</>;
}

export function ProtectedAdminRoute({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      {children}
    </ProtectedRoute>
  );
}

export function ProtectedMemberRoute({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={['admin', 'user']}>
      {children}
    </ProtectedRoute>
  );
}
