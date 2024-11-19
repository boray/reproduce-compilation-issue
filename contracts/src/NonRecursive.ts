import { ZkProgram, Field, SelfProof } from 'o1js';

export const NonRecursive = ZkProgram({
    name: 'non-recursive-example',
    publicInput: Field,
    
    methods: {
    init: {
    privateInputs: [],
    
      async method(state: Field) {
        state.assertEquals(Field(0));
      },
    }
    },
    });
