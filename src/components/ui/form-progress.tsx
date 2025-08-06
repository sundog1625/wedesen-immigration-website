import { CheckCircle2, Circle } from "lucide-react";

interface FormProgressProps {
  steps: string[];
  currentStep: number;
  completedSteps: number[];
}

const FormProgress = ({ steps, currentStep, completedSteps }: FormProgressProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          const isCurrent = currentStep === index;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors
                  ${isCompleted 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : isCurrent 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-background border-muted-foreground text-muted-foreground'
                  }
                `}>
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>
                <span className={`
                  mt-2 text-xs text-center max-w-[80px]
                  ${isCurrent ? 'text-primary font-medium' : 'text-muted-foreground'}
                `}>
                  {step}
                </span>
              </div>
              
              {!isLast && (
                <div className={`
                  flex-1 h-0.5 mx-4 transition-colors
                  ${isCompleted ? 'bg-green-500' : 'bg-muted'}
                `} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormProgress;