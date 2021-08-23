import { NativeModules } from 'react-native';

type GodModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { GodModule } = NativeModules;

export default GodModule as GodModuleType;
