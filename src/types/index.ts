export interface DogData {
  image: File | null;
  imagePreview: string;
  situation: string;
}

export interface LLMResponse {
  title: string; // 3-5 word text with emoji
  description: string; // 3-5 lines description
}

export interface PredictionResult {
  id: string;
  imagePreview: string;
  title: string;
  description: string;
  timestamp: Date;
}

export interface AppState {
  currentStep: "upload" | "description" | "predicting" | "result";
  dogData: DogData;
  prediction: PredictionResult | null;
  isLoading: boolean;
  error: string | null;
}

export interface DragState {
  isDragActive: boolean;
  isDragReject: boolean;
  isDragAccept: boolean;
}
