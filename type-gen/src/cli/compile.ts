import ts = require("typescript");

const defaultOptions: ts.CompilerOptions = {
  noEmitOnError: false,
  allowJs: true,
  maxNodeModuleJsDepth: 3,
  experimentalDecorators: true,
  target: ts.ScriptTarget.Latest,
  downlevelIteration: true,
  module: ts.ModuleKind.ESNext,
  strictNullChecks: true,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  esModuleInterop: true,
  noEmit: true,
  allowSyntheticDefaultImports: true,
  allowUnreachableCode: true,
  allowUnusedLabels: true,
  skipLibCheck: true,
};

/**
 * Compiles an array of file paths using typescript.
 */
export function compileTypescript(filePaths: string[] | string, options = defaultOptions) {
  filePaths = Array.isArray(filePaths) ? filePaths : [filePaths];
  const program = ts.createProgram(filePaths, options);
  const files = program
    .getSourceFiles()
    .filter((sf) => filePaths.includes(sf.fileName))
    .sort((sfA, sfB) => (sfA.fileName > sfB.fileName ? 1 : -1));
  return { program, files };
}