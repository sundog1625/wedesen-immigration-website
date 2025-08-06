import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
  success?: boolean;
  helpText?: string;
  rows?: number;
  maxLength?: number;
}

const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({
    label,
    name,
    value,
    onChange,
    type = 'text',
    placeholder,
    required = false,
    error,
    success = false,
    helpText,
    rows = 3,
    maxLength,
    ...props
  }, ref) => {
    const hasError = !!error;
    const showSuccess = success && !hasError && value.length > 0;

    return (
      <div className="space-y-2">
        <Label htmlFor={name} className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        
        <div className="relative">
          {type === 'textarea' ? (
            <Textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={name}
              name={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              rows={rows}
              maxLength={maxLength}
              className={`
                transition-colors duration-200
                ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
                ${showSuccess ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' : ''}
              `}
              {...props}
            />
          ) : (
            <Input
              ref={ref as React.Ref<HTMLInputElement>}
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              maxLength={maxLength}
              className={`
                transition-colors duration-200 pr-10
                ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
                ${showSuccess ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20' : ''}
              `}
              {...props}
            />
          )}
          
          {/* Validation Icons */}
          {(hasError || showSuccess) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {hasError && (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
              {showSuccess && (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
            </div>
          )}
        </div>

        {/* Character Count */}
        {maxLength && type === 'textarea' && (
          <div className="text-right">
            <span className={`text-xs ${value.length > maxLength * 0.9 ? 'text-amber-600' : 'text-muted-foreground'}`}>
              {value.length}/{maxLength}
            </span>
          </div>
        )}

        {/* Error Message */}
        {hasError && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {error}
          </p>
        )}

        {/* Help Text */}
        {helpText && !hasError && (
          <p className="text-xs text-muted-foreground">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;