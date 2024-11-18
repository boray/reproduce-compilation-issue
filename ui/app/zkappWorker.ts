import * as Comlink from "comlink";
import type { AddProgram } from '../../contracts/src/AddProgram';


const state = {
  AddProgramInstance: null as null | typeof AddProgram
};

export const api = {
  async loadProgram() {
    const { AddProgram } = await import('../../contracts/build/src/AddProgram.js');
    state.AddProgramInstance = AddProgram;
  },
  async compileProgram() {
    await state.AddProgramInstance!.compile();
  }
};

// Expose the API to be used by the main thread
Comlink.expose(api);
