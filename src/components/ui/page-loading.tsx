import LoadingSpinner from "./loading-spinner";

interface PageLoadingProps {
  text?: string;
}

const PageLoading = ({ text = "加载中..." }: PageLoadingProps) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
};

export default PageLoading;