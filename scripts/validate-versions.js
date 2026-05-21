#!/usr/bin/env node
/**
 * validate-versions.js — Validate version consistency across files
 *
 * Checks:
 *   1. Root SKILL.md version field
 *   2. publish/SKILL.md version field  
 *   3. CHANGELOG.md latest entry version
 *   4. package.json version (if exists)
 *
 * Usage: node validate-versions.js
 * Exit code: 0 = consistent, 1 = inconsistent
 */

const fs = require('fs');
const path = require('path');

const ROOT_SKILL = path.join(__dirname, '..', 'SKILL.md');
const PUBLISH_SKILL = path.join(__dirname, '..', 'publish', 'SKILL.md');
const CHANGELOG = path.join(__dirname, '..', 'CHANGELOG.md');
const PACKAGE_JSON = path.join(__dirname, '..', 'package.json');

function extractVersion(filePath, pattern) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(pattern);
  return match ? match[1] : null;
}

function validate() {
  let errors = [];
  let warnings = [];

  // 1. Root SKILL.md
  const rootVersion = extractVersion(ROOT_SKILL, /version:\s*["']?(\d+\.\d+\.\d+)["']?\s*\n/);
  if (!rootVersion) {
    errors.push(`❌ Root SKILL.md: version field not found or malformed`);
  } else {
    console.log(`✅ Root SKILL.md: v${rootVersion}`);
  }

  // 2. publish/SKILL.md
  const publishVersion = extractVersion(PUBLISH_SKILL, /version:\s*["']?(\d+\.\d+\.\d+)["']?\s*\n/);
  if (!publishVersion) {
    errors.push(`❌ publish/SKILL.md: version field not found or malformed`);
  } else {
    console.log(`✅ publish/SKILL.md: v${publishVersion}`);
  }

  // 3. CHANGELOG.md latest entry
  if (fs.existsSync(CHANGELOG)) {
    const content = fs.readFileSync(CHANGELOG, 'utf-8');
    const match = content.match(/##\s*\[(\d+\.\d+\.\d+)\]/);
    if (match) {
      const changelogVersion = match[1];
      console.log(`✅ CHANGELOG.md latest: v${changelogVersion}`);
      
      if (rootVersion && rootVersion !== changelogVersion) {
        errors.push(`❌ Version mismatch: Root SKILL.md (v${rootVersion}) vs CHANGELOG.md (v${changelogVersion})`);
      }
      if (publishVersion && publishVersion !== changelogVersion) {
        warnings.push(`⚠️  publish/SKILL.md (v${publishVersion}) ≠ CHANGELOG.md (v${changelogVersion})`);
      }
    } else {
      errors.push(`❌ CHANGELOG.md: latest version entry not found`);
    }
  } else {
    errors.push(`❌ CHANGELOG.md not found`);
  }

  // 4. package.json (optional)
  if (fs.existsSync(PACKAGE_JSON)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf-8'));
      if (pkg.version) {
        console.log(`✅ package.json: v${pkg.version}`);
        if (rootVersion && rootVersion !== pkg.version) {
          warnings.push(`⚠️  Root SKILL.md (v${rootVersion}) vs package.json (v${pkg.version})`);
        }
      }
    } catch (e) {
      warnings.push(`⚠️  package.json: invalid JSON (${e.message})`);
    }
  } else {
    console.log(`ℹ️  package.json not found (optional)`);
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  if (errors.length > 0) {
    console.error('\n❌ Validation FAILED:\n');
    errors.forEach(e => console.error(`  ${e}`));
    if (warnings.length > 0) {
      console.warn('\n⚠️  Warnings:\n');
      warnings.forEach(w => console.warn(`  ${w}`));
    }
    process.exit(1);
  } else {
    console.log('\n✅ Validation PASSED');
    if (warnings.length > 0) {
      console.log('\n⚠️  Warnings:\n');
      warnings.forEach(w => console.log(`  ${w}`));
    }
    process.exit(0);
  }
}

validate();
