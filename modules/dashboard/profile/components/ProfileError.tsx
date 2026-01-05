interface Props {
  message?: string;
}

const ProfileError = ({ message }: Props) => (
  <div className="min-h-screen bg-background flex items-center justify-center p-6">
    <div className="bg-secondary/20 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-foreground/20">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-textcolor mb-2">حدث خطأ</h2>
        <p className="text-textcolor/70">{message || "فشل تحميل البيانات"}</p>
      </div>
    </div>
  </div>
);

export default ProfileError;
