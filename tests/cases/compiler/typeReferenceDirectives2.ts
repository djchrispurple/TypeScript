// @noImplicitReferences: true
// @traceResolution: true
// @declaration: true
// @typesRoot: /
// @types: lib

// @filename: /types/lib/index.d.ts
interface $ { x }

// @filename: /app.ts
interface A {
    x: $
}