import React, { createContext, useContext, useState } from 'react';
import { apiService } from '../services/api';
import { useAuth } from './AuthContext';

const KycContext = createContext();

export function KycProvider({ children }) {
  const { player, updatePlayerData } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    documentType: 'Cédula de Ciudadanía',
    documentNumber: '',
    birthDate: '',
    phone: '',
    address: '',
    frontImage: null,
    backImage: null,
    selfieImage: null,
    proofAddressImage: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitApplication = async () => {
    setIsSubmitting(true);
    try {
      // Simulate network latency
      await new Promise(res => setTimeout(res, 900));

      const updated = apiService.submitKycApplication({
        ...formData,
        frontUrl: formData.frontImage || '/img/winarena_hero_bg.png',
        backUrl: formData.backImage || '/img/winarena_hero_bg.png',
        selfieUrl: formData.selfieImage || '/img/user_avatar.jpg',
        proofAddressUrl: formData.proofAddressImage || '/img/winarena_hero_bg.png'
      });

      updatePlayerData({ kycStatus: 'PENDING' });
      setSubmissionSuccess(true);
      setCurrentStep(4);
    } catch (err) {
      console.error('Error submitting KYC:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetKyc = () => {
    setCurrentStep(1);
    setSubmissionSuccess(false);
    setFormData({
      documentType: 'Cédula de Ciudadanía',
      documentNumber: '',
      birthDate: '',
      phone: '',
      address: '',
      frontImage: null,
      backImage: null,
      selfieImage: null,
      proofAddressImage: null
    });
  };

  return (
    <KycContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        updateField,
        nextStep,
        prevStep,
        submitApplication,
        isSubmitting,
        submissionSuccess,
        resetKyc
      }}
    >
      {children}
    </KycContext.Provider>
  );
}

export function useKyc() {
  const context = useContext(KycContext);
  if (!context) {
    throw new Error('useKyc must be used within a KycProvider');
  }
  return context;
}
