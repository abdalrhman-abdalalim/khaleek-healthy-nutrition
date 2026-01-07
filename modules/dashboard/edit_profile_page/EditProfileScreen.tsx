"use client"
import { Toaster } from 'react-hot-toast';
import { useEditProfileForm } from './models/useEditProfileForm';
import SaveChangesButton from './components/SaveChangesButton';
import PersonalInfoCard from './features/PersonalInfoCard/PersonalInfoCard';
import ActivityGoalsCard from './features/ActivityGoalsCard/ActivityGoalsCard';
import DietBudgetCard from './features/DietBudgetCard/DietBudgetCard';
import SettingsCard from './features/SettingsCard/SettingsCard';
import ProfileHeaderCard from './components/ProfileHeaderCard';
import ErrorAlert from '@/shared/components/ErrorAlert';
import LoadingScreen from '@/shared/components/LoadingScreen';

const EditProfileScreen = () => {
  const {profileData, formData, setFormData, handleSubmit, isPending, error,isLoadingProfile  } = useEditProfileForm();
  
  if (isLoadingProfile) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <Toaster position='top-center' />
        <ProfileHeaderCard  title="تعديل الملف الشخصي" subtitle="قم بتحديث معلوماتك الشخصية وإعداداتك"/>
        <ErrorAlert error={error} />

        <div className="space-y-6">
            <PersonalInfoCard formData={formData} setFormData={setFormData} profileData={profileData}/>
            <ActivityGoalsCard formData={formData} setFormData={setFormData} profileData={profileData}/>
            <DietBudgetCard formData={formData} setFormData={setFormData} profileData={profileData}/>
            <SettingsCard formData={formData} setFormData={setFormData} profileData={profileData}/>
            <SaveChangesButton isPending={isPending}  onClick={async () => { await handleSubmit(); }}/>
        </div>
      </div>
    </div>
  );
};

export default EditProfileScreen;
