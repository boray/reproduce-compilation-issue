import * as Comlink from "comlink";
import type { AddProgram } from '../../contracts/src/AddProgram';
import type { NonRecursive } from '../../contracts/src/NonRecursive';



const state = {
  AddProgramInstance: null as null | typeof AddProgram,
  NonRecursiveProgramInstance: null as null | typeof NonRecursive

};

export const api = {
  async loadProgram() {
    const { AddProgram } = await import('../../contracts/build/src/AddProgram.js');
    state.AddProgramInstance = AddProgram;
  },
  async loadNonRecursiveProgram() {
    const { NonRecursive } = await import('../../contracts/build/src/NonRecursive.js');
    state.NonRecursiveProgramInstance = NonRecursive;
  },
  async compileProgram() {
    await state.AddProgramInstance!.compile();
  },
  async compileNonRecursiveProgram() {
    await state.NonRecursiveProgramInstance!.compile();
  }
};

// Expose the API to be used by the main thread
Comlink.expose(api);
