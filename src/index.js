import mitt from 'mitt';

const emitter = mitt();

export const programs = {};

export function registerInterface(program, PropTypes) {
  let programType;
  if (PropTypes) {
    programType = {
      name: PropTypes.string.isRequired,
      program: PropTypes.func.isRequired,
      types: PropTypes.object.isRequired,
      description: PropTypes.string
    };
  }

  function runner(data) {
    try {
      if (PropTypes) {
        PropTypes.checkPropTypes(program.types, data, 'program', program.name);
      }
    } catch (e) {
      throw new Error(e);
    }
    return program.program(data);
  }
  try {
    if (PropTypes) {
      PropTypes.checkPropTypes(programType, program, 'prop', 'ambit registerInterface');
    }
    if (!programs[program.name]) {
      programs[program.name] = {
        name: program.name,
        types: program.types,
        description: program.description,
        program: program.program
      };

      emitter.on(program.name, runner);
      emitter.emit('program-added', program.name);
    } else {
      throw new Error(`A program with name "${program.name}" is already registered`);
    }
  } catch (registerInterfaceError) {
    throw new Error(registerInterfaceError);
  }
  return function removeProgram() {
    emitter.off(program.name, runner);
    programs[program.name] = undefined;
  };
}

export default emitter.emit;
