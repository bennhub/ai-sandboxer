export const TRACKS = [
  {
    id: "automation-coding",
    title: "Automation Coding",
    summary: "Practice writing and fixing QA automation code with local AI guidance.",
    outputLabel: "Automation Draft",
    sourceLabel: "Test Starter",
    previewLabel: "Automation Brief",
    aiRole: "QA automation coach",
    exercises: [
      {
        id: "playwright-login",
        title: "Complete a Playwright Login Test",
        difficulty: "Easy",
        category: "Playwright",
        summary: "Finish a Playwright login test by adding stable assertions and the missing user flow.",
        instructions: ["Complete the test.", "Use stable locators.", "Add meaningful assertions.", "Avoid time-based waits."],
        starter: `import { test, expect } from '@playwright/test';

test('user can log in and see dashboard', async ({ page }) => {
  await page.goto('https://app.example.com/login');
  await page.getByLabel('Email').fill('qa@example.com');
  await page.getByLabel('Password').fill('Password123!');
  // Complete the login flow and add assertions.
});`,
        checks: [{ label: "Triggers login action", test: (c) => /click|press\(\s*['"]Enter['"]\s*\)/.test(c) }, { label: "Includes assertions", test: (c) => /expect\(/.test(c) }, { label: "Avoids time waits", test: (c) => !/waitForTimeout/.test(c) }]
      },
      {
        id: "cypress-checkout",
        title: "Strengthen a Cypress Checkout Test",
        difficulty: "Medium",
        category: "Cypress",
        summary: "Improve a weak Cypress checkout test with stronger assertions and selectors.",
        instructions: ["Improve selectors.", "Add assertions.", "Keep it readable.", "Avoid arbitrary waits."],
        starter: `describe('checkout flow', () => {
  it('lets a user check out', () => {
    cy.visit('/cart');
    cy.get('.checkout-btn').click();
    cy.wait(2000);
    cy.contains('Payment');
  });
});`,
        checks: [{ label: "Contains assertions", test: (c) => /should\(|contains\(|expect\(/.test(c) }, { label: "Avoids wait(2000)", test: (c) => !/wait\(2000\)/.test(c) }, { label: "Uses better selectors", test: (c) => /data-cy|data-testid|contains|getBy|find/.test(c) }]
      },
      {
        id: "page-object-method",
        title: "Write a Page Object Method",
        difficulty: "Medium",
        category: "Page Objects",
        summary: "Implement a reusable Playwright page object login method.",
        instructions: ["Complete the page object method.", "Use locator patterns.", "Keep it reusable.", "Avoid sleeps."],
        starter: `import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://app.example.com/login');
  }

  async login(email: string, password: string) {
    // Implement this method.
  }
}`,
        checks: [{ label: "Defines method body", test: (c) => /async\s+login\s*\(/.test(c) && !/Implement this method/.test(c) }, { label: "Uses page actions", test: (c) => /getByLabel|locator|fill|click|press/.test(c) }, { label: "Avoids waits", test: (c) => !/waitForTimeout/.test(c) }]
      },
      {
        id: "api-helper",
        title: "Write an API Request Helper",
        difficulty: "Medium",
        category: "API Testing",
        summary: "Implement a helper that creates a user with Playwright request context.",
        instructions: ["Use request context.", "Return parsed data.", "Handle bad responses."],
        starter: `import { APIRequestContext } from '@playwright/test';

export async function createUser(request: APIRequestContext) {
  // Implement helper
}`,
        checks: [{ label: "Uses request context", test: (c) => /request\.(post|get|fetch)/.test(c) }, { label: "Returns data", test: (c) => /return/.test(c) }, { label: "Handles errors", test: (c) => /ok\(|status|throw/.test(c) }]
      },
      {
        id: "locator-refactor",
        title: "Refactor Fragile Locators",
        difficulty: "Easy",
        category: "Locators",
        summary: "Replace weak selectors with more stable locator patterns.",
        instructions: ["Improve selector quality.", "Prefer stable APIs.", "Keep the flow intact."],
        starter: `import { test } from '@playwright/test';

test('edits profile', async ({ page }) => {
  await page.goto('/profile');
  await page.locator('button').nth(1).click();
  await page.locator('input').nth(0).fill('Ben');
  await page.locator('.save').click();
});`,
        checks: [{ label: "Reduces nth usage", test: (c) => !/nth\(/.test(c) }, { label: "Uses stable locators", test: (c) => /getByRole|getByLabel|getByTestId|data-testid|data-cy/.test(c) }, { label: "Keeps actions", test: (c) => /click|fill/.test(c) }]
      },
      {
        id: "assertion-upgrade",
        title: "Upgrade Weak Assertions",
        difficulty: "Easy",
        category: "Assertions",
        summary: "Turn a placeholder assertion into meaningful UI assertions.",
        instructions: ["Keep the flow.", "Use meaningful assertions.", "Check visible outcomes."],
        starter: `import { test, expect } from '@playwright/test';

test('opens modal', async ({ page }) => {
  await page.goto('/home');
  await page.getByRole('button', { name: 'Open' }).click();
  expect(true).toBeTruthy();
});`,
        checks: [{ label: "Removes placeholder assertion", test: (c) => !/toBeTruthy\(\)/.test(c) }, { label: "Uses expect", test: (c) => /expect\(/.test(c) }, { label: "Checks UI state", test: (c) => /toBeVisible|toContainText|toHaveText|toBeEnabled/.test(c) }]
      },
      {
        id: "fixture-setup",
        title: "Create a Test Fixture",
        difficulty: "Medium",
        category: "Fixtures",
        summary: "Implement a fixture extension for authenticated tests.",
        instructions: ["Extend the base test.", "Expose a logged-in helper.", "Keep it readable."],
        starter: `import { test as base } from '@playwright/test';

type Fixtures = {
  loggedInPage: unknown;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    // Implement fixture setup
    await use(page);
  }
});`,
        checks: [{ label: "Uses base.extend", test: (c) => /base\.extend/.test(c) }, { label: "Implements setup", test: (c) => !/Implement fixture setup/.test(c) }, { label: "Calls use", test: (c) => /await use\(/.test(c) }]
      },
      {
        id: "test-data-builder",
        title: "Build Test Data Factory",
        difficulty: "Medium",
        category: "Test Data",
        summary: "Write a simple factory for reusable user test data.",
        instructions: ["Implement a user factory.", "Allow overrides.", "Keep defaults realistic."],
        starter: `type User = { name: string; email: string; role: string };

export function buildUser(overrides: Partial<User> = {}): User {
  return {
    name: '',
    email: '',
    role: '',
    ...overrides
  };
}`,
        checks: [{ label: "Uses overrides", test: (c) => /\.\.\.overrides/.test(c) }, { label: "Returns object", test: (c) => /return\s*\{/.test(c) }, { label: "Provides real defaults", test: (c) => /name:\s*['"][^'"]+['"]/.test(c) && /email:\s*['"][^'"]+['"]/.test(c) }]
      },
      {
        id: "network-stub",
        title: "Stub a Network Response",
        difficulty: "Medium",
        category: "Network Mocking",
        summary: "Add a Playwright route stub for a dashboard API response.",
        instructions: ["Use page.route.", "Return mocked JSON.", "Keep it deterministic."],
        starter: `import { test } from '@playwright/test';

test('dashboard handles empty state', async ({ page }) => {
  // Add route mock here
  await page.goto('/dashboard');
});`,
        checks: [{ label: "Uses route mocking", test: (c) => /page\.route/.test(c) }, { label: "Fulfills response", test: (c) => /fulfill/.test(c) }, { label: "Mocks JSON payload", test: (c) => /json|body|\{/.test(c) }]
      },
      {
        id: "negative-path-test",
        title: "Add a Negative Path Test",
        difficulty: "Easy",
        category: "Negative Testing",
        summary: "Write the missing negative-path assertion for a failed login.",
        instructions: ["Keep the existing flow.", "Assert the error message.", "Do not use time waits."],
        starter: `import { test, expect } from '@playwright/test';

test('user sees error for invalid login', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('bad@example.com');
  await page.getByLabel('Password').fill('wrong-pass');
  await page.getByRole('button', { name: 'Log in' }).click();
  // Add negative-path assertion here
});`,
        checks: [{ label: "Uses expect", test: (c) => /expect\(/.test(c) }, { label: "Checks error state", test: (c) => /error|incorrect|invalid|toContainText|toBeVisible/.test(c) }, { label: "Avoids waits", test: (c) => !/waitForTimeout/.test(c) }]
      }
    ]
  },
  {
    id: "review",
    title: "Code Review Training",
    summary: "Practice reviewing test automation and identifying reliability issues.",
    outputLabel: "Your Review Notes",
    sourceLabel: "Code To Review",
    previewLabel: "Review Prompt",
    aiRole: "code review mentor",
    exercises: [
      {
        id: "playwright-review",
        title: "Review a Playwright Test",
        difficulty: "Medium",
        category: "Playwright",
        summary: "Review the test and call out flakiness, weak assertions, and maintainability issues.",
        instructions: ["Write review notes only.", "Focus on reliability and assertions.", "Mention one concrete improvement."],
        starter: `Review this Playwright test:

\`\`\`ts
import { test, expect } from '@playwright/test';

test('user can checkout', async ({ page }) => {
  await page.goto('https://shop.example.com');
  await page.click('text=Login');
  await page.fill('#email', 'test@example.com');
  await page.fill('#password', 'password123');
  await page.click('button');
  await page.waitForTimeout(3000);
  await page.click('.product-card');
  await page.click('text=Add to cart');
  await page.click('text=Checkout');
  expect(await page.locator('h1').textContent()).toContain('Thank');
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions flakiness or waits", test: (c) => /flaky|waitForTimeout|wait|timing/i.test(c) }, { label: "Mentions selectors or assertions", test: (c) => /selector|assert|expect|locator/i.test(c) }, { label: "Reads like review notes", test: (c) => /issue|risk|improve|should|could/i.test(c) }]
      },
      {
        id: "cypress-review",
        title: "Review a Cypress Script",
        difficulty: "Medium",
        category: "Cypress",
        summary: "Evaluate the Cypress test for poor patterns and missing coverage.",
        instructions: ["Write PR-style findings.", "Prioritize reliability.", "Mention assertion or selector issues."],
        starter: `Review this Cypress test:

\`\`\`js
describe('settings page', () => {
  it('updates profile', () => {
    cy.visit('/settings');
    cy.get('input').eq(0).type('Ben');
    cy.get('input').eq(1).type('Hayes');
    cy.get('.save').click();
    cy.wait(2000);
    cy.contains('Saved');
  });
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Calls out fragile selectors", test: (c) => /selector|eq\(0\)|eq\(1\)|fragile/i.test(c) }, { label: "Calls out timing risk", test: (c) => /wait|timing|flaky/i.test(c) }, { label: "Mentions assertion quality", test: (c) => /assert|contains|verification|expect/i.test(c) }]
      },
      {
        id: "flaky-playwright-review",
        title: "Review a Flaky Playwright Test",
        difficulty: "Hard",
        category: "Playwright Flakiness",
        summary: "Review a flaky Playwright test and identify timing, selector, and reliability issues.",
        instructions: ["Write review notes.", "Prioritize flake risks.", "Mention how to stabilize it."],
        starter: `Review this Playwright test:

\`\`\`ts
import { test, expect } from '@playwright/test';

test('user can search and open first result', async ({ page }) => {
  await page.goto('https://app.example.com');
  await page.fill('input', 'billing');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(4000);
  await page.click('.result-item');
  await page.waitForTimeout(2000);
  expect(await page.locator('h1').textContent()).toContain('Billing');
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Calls out time waits", test: (c) => /waitForTimeout|timing|flake|flaky/i.test(c) }, { label: "Calls out selector quality", test: (c) => /selector|result-item|locator/i.test(c) }, { label: "Suggests stabilization", test: (c) => /wait for|assert|stable|better locator|improve/i.test(c) }]
      },
      {
        id: "page-object-review",
        title: "Review a Page Object",
        difficulty: "Medium",
        category: "Page Objects",
        summary: "Review a page object for abstraction leaks and weak method design.",
        instructions: ["Review design quality.", "Mention waits or selectors.", "Offer an improvement."],
        starter: `Review this page object:

\`\`\`ts
export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async checkout() {
    await this.page.click('.checkout');
    await this.page.waitForTimeout(2000);
  }

  async removeFirstItem() {
    await this.page.locator('button').nth(0).click();
  }
}
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions design or abstraction", test: (c) => /abstraction|page object|design|method/i.test(c) }, { label: "Mentions selectors or waits", test: (c) => /selector|nth|waitForTimeout|wait/i.test(c) }, { label: "Suggests improvement", test: (c) => /improve|should|could|better/i.test(c) }]
      },
      {
        id: "api-test-review",
        title: "Review an API Test",
        difficulty: "Medium",
        category: "API Testing",
        summary: "Review an API test for weak coverage and missing assertions.",
        instructions: ["Focus on missing checks.", "Mention data contract coverage.", "Write review notes only."],
        starter: `Review this API test:

\`\`\`ts
test('creates order', async ({ request }) => {
  const response = await request.post('/api/orders', { data: { sku: 'abc' } });
  expect(response.status()).toBe(200);
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions response body coverage", test: (c) => /body|json|response/i.test(c) }, { label: "Mentions status/assertions", test: (c) => /status|assert|expect/i.test(c) }, { label: "Mentions edge cases", test: (c) => /edge|invalid|payload|data/i.test(c) }]
      },
      {
        id: "fixture-review",
        title: "Review a Fixture Setup",
        difficulty: "Medium",
        category: "Fixtures",
        summary: "Review a fixture for hidden coupling and poor cleanup behavior.",
        instructions: ["Look for coupling.", "Mention cleanup or isolation.", "Write reviewer notes."],
        starter: `Review this fixture:

\`\`\`ts
export const test = base.extend({
  seededUser: async ({ page, request }, use) => {
    await request.post('/api/users', { data: { email: 'a@test.com' } });
    await page.goto('/login');
    await use({ email: 'a@test.com' });
  }
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions isolation or cleanup", test: (c) => /cleanup|state|isolation|coupling/i.test(c) }, { label: "Mentions fixture design", test: (c) => /fixture|reuse|setup/i.test(c) }, { label: "Offers improvement", test: (c) => /improve|should|could/i.test(c) }]
      },
      {
        id: "assertion-review",
        title: "Review Weak Assertions",
        difficulty: "Easy",
        category: "Assertions",
        summary: "Review a test with weak assertions and call out what is missing.",
        instructions: ["Focus on assertion quality.", "Mention missing visible checks.", "Be concise."],
        starter: `Review this test:

\`\`\`ts
test('opens modal', async ({ page }) => {
  await page.goto('/home');
  await page.getByRole('button', { name: 'Open' }).click();
  expect(true).toBeTruthy();
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions weak assertion", test: (c) => /truthy|weak|assert/i.test(c) }, { label: "Mentions visible outcome", test: (c) => /visible|modal|text|state/i.test(c) }, { label: "Suggests better check", test: (c) => /toBeVisible|toContainText|better/i.test(c) }]
      },
      {
        id: "cypress-command-review",
        title: "Review a Custom Cypress Command",
        difficulty: "Medium",
        category: "Cypress Commands",
        summary: "Review a custom Cypress command for poor reuse and hidden assumptions.",
        instructions: ["Look for command design issues.", "Mention selectors and waits.", "Use PR-style feedback."],
        starter: `Review this custom command:

\`\`\`js
Cypress.Commands.add('loginAsAdmin', () => {
  cy.visit('/login');
  cy.get('input').eq(0).type('admin@test.com');
  cy.get('input').eq(1).type('Password123!');
  cy.get('button').click();
  cy.wait(3000);
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions fragile selectors or waits", test: (c) => /selector|eq\(|wait|fragile/i.test(c) }, { label: "Mentions hardcoded assumptions", test: (c) => /assumption|hardcoded|config|reuse/i.test(c) }, { label: "Suggests improvements", test: (c) => /improve|should|could/i.test(c) }]
      },
      {
        id: "test-data-review",
        title: "Review Test Data Setup",
        difficulty: "Medium",
        category: "Test Data",
        summary: "Review a test for brittle hardcoded data and poor isolation.",
        instructions: ["Focus on data problems.", "Mention reuse or collisions.", "Write reviewer notes."],
        starter: `Review this test:

\`\`\`ts
test('invites user', async ({ page }) => {
  await page.goto('/team');
  await page.getByLabel('Email').fill('invitee@test.com');
  await page.getByRole('button', { name: 'Invite' }).click();
  await expect(page.getByText('Invite sent')).toBeVisible();
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions hardcoded data risk", test: (c) => /hardcoded|data|collision|reuse/i.test(c) }, { label: "Mentions isolation", test: (c) => /cleanup|isolation|state/i.test(c) }, { label: "Suggests safer approach", test: (c) => /factory|builder|unique|improve/i.test(c) }]
      },
      {
        id: "selector-review",
        title: "Review Selector Strategy",
        difficulty: "Easy",
        category: "Selectors",
        summary: "Review a test that relies on brittle selector strategy.",
        instructions: ["Call out selector quality.", "Mention stable alternatives.", "Keep feedback concise."],
        starter: `Review this test:

\`\`\`ts
test('filters orders', async ({ page }) => {
  await page.goto('/orders');
  await page.locator('input').nth(2).fill('pending');
  await page.locator('button').nth(0).click();
});
\`\`\`

Write review notes below.`,
        checks: [{ label: "Mentions brittle selectors", test: (c) => /nth|input|button|fragile|selector/i.test(c) }, { label: "Mentions stable alternatives", test: (c) => /role|label|testid|data-cy|data-testid/i.test(c) }, { label: "Uses review tone", test: (c) => /issue|risk|improve|should|could/i.test(c) }]
      }
    ]
  },
  {
    id: "skills",
    title: "AI Skill Training",
    summary: "Practice writing reusable skill files and structured AI instructions.",
    outputLabel: "Skill Draft",
    sourceLabel: "Skill Brief",
    previewLabel: "Expected Structure",
    aiRole: "AI training mentor",
    exercises: [
      {
        id: "skill-reviewer",
        title: "Create a PR Review Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Draft a skill file that teaches an AI agent how to review PRs for bugs and test gaps.",
        instructions: ["Use skill-style structure.", "Include purpose, scope, workflow, constraints.", "Bias toward findings-first reviews."],
        starter: `Draft a skill file for an AI agent that reviews pull requests.

The skill should teach the agent to:
- prioritize bugs and regressions
- mention missing tests
- cite file paths and concrete issues
- avoid shallow praise

Write the skill below using a structured instructional style.`,
        checks: [{ label: "Includes purpose or scope", test: (c) => /purpose|scope|use when|goal/i.test(c) }, { label: "Includes workflow", test: (c) => /workflow|steps|process|review flow/i.test(c) }, { label: "Includes constraints", test: (c) => /avoid|must|should|do not|constraints/i.test(c) }]
      },
      {
        id: "skill-bug-triage",
        title: "Create a Bug Triage Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Write a skill file for triaging bug reports into actionable engineering tickets.",
        instructions: ["Include expected inputs.", "Separate symptoms from guesses.", "Require concise output."],
        starter: `Draft a skill file for an AI bug triage assistant.

The assistant should:
- read bug reports
- extract environment, repro steps, expected result, actual result
- avoid inventing root causes
- produce clean engineering-ready summaries

Write the skill below.`,
        checks: [{ label: "Defines input handling", test: (c) => /input|expects|bug report|repro/i.test(c) }, { label: "Separates facts from guesses", test: (c) => /fact|guess|hypothesis|do not invent|uncertain/i.test(c) }, { label: "Mentions ticket output", test: (c) => /summary|ticket|output|format/i.test(c) }]
      },
      {
        id: "skill-test-review",
        title: "Create a Test Review Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Draft a skill for reviewing Playwright or Cypress tests for flakiness and weak assertions.",
        instructions: ["Include scope.", "Mention flakiness and assertion quality.", "Use findings-first review style."],
        starter: `Draft a skill file for an AI that reviews test automation for flakiness, weak assertions, and poor selector strategy.`,
        checks: [{ label: "Includes review scope", test: (c) => /scope|review|test automation/i.test(c) }, { label: "Mentions flakiness or waits", test: (c) => /flaky|wait|timing/i.test(c) }, { label: "Includes workflow", test: (c) => /workflow|steps|process/i.test(c) }]
      },
      {
        id: "skill-test-ideas",
        title: "Create a Test-Idea Generation Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Write a skill file for generating test ideas from requirements and acceptance criteria.",
        instructions: ["Mention inputs.", "Require happy, negative, and edge coverage.", "Keep output structured."],
        starter: `Draft a skill file for an AI that generates QA test ideas from feature briefs and acceptance criteria.`,
        checks: [{ label: "Mentions input requirements", test: (c) => /input|acceptance criteria|feature brief/i.test(c) }, { label: "Mentions coverage categories", test: (c) => /happy|negative|edge/i.test(c) }, { label: "Mentions structured output", test: (c) => /output|format|sections/i.test(c) }]
      },
      {
        id: "skill-flake-triage",
        title: "Create a Flaky-Test Triage Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Draft a skill for helping engineers triage flaky automation failures.",
        instructions: ["Mention signals to inspect.", "Avoid false certainty.", "Keep output actionable."],
        starter: `Draft a skill file for an AI that triages flaky Playwright and Cypress failures into actionable next steps.`,
        checks: [{ label: "Mentions signals or evidence", test: (c) => /signal|evidence|logs|trace|video/i.test(c) }, { label: "Avoids false certainty", test: (c) => /do not invent|uncertain|hypothesis/i.test(c) }, { label: "Keeps output actionable", test: (c) => /next step|action|recommend/i.test(c) }]
      },
      {
        id: "skill-page-object",
        title: "Create a Page Object Helper Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Write a skill that teaches an AI to improve page objects without over-abstracting them.",
        instructions: ["Mention design tradeoffs.", "Keep methods intent-focused.", "Include anti-patterns to avoid."],
        starter: `Draft a skill file for improving Playwright page objects while avoiding abstraction leaks and fragile methods.`,
        checks: [{ label: "Mentions page object tradeoffs", test: (c) => /page object|abstraction|intent/i.test(c) }, { label: "Mentions anti-patterns", test: (c) => /avoid|anti-pattern|do not/i.test(c) }, { label: "Includes reusable workflow", test: (c) => /workflow|steps|process/i.test(c) }]
      },
      {
        id: "skill-assertion",
        title: "Create an Assertion Upgrade Skill",
        difficulty: "Easy",
        category: "Prompt / Skill Files",
        summary: "Draft a skill for turning weak tests into tests with stronger assertions.",
        instructions: ["Mention user-visible outcomes.", "Avoid vague checks.", "Keep it concise."],
        starter: `Draft a skill file for an AI that upgrades weak UI automation assertions into stronger user-visible checks.`,
        checks: [{ label: "Mentions stronger assertions", test: (c) => /assert|visible|state|text/i.test(c) }, { label: "Mentions vague-check avoidance", test: (c) => /avoid|weak|truthy|vague/i.test(c) }, { label: "Includes output guidance", test: (c) => /output|format|response/i.test(c) }]
      },
      {
        id: "skill-automation-planner",
        title: "Create an Automation Planning Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Write a skill for deciding what should be covered by E2E automation and what should not.",
        instructions: ["Include scope boundaries.", "Mention value and risk.", "Avoid blanket automation advice."],
        starter: `Draft a skill file for an AI that helps QA engineers decide which scenarios should be automated in Playwright or Cypress.`,
        checks: [{ label: "Mentions boundaries or scope", test: (c) => /scope|boundary|when to use/i.test(c) }, { label: "Mentions value and risk", test: (c) => /value|risk|cost|benefit/i.test(c) }, { label: "Avoids blanket advice", test: (c) => /avoid|not everything|do not/i.test(c) }]
      },
      {
        id: "skill-bug-repro",
        title: "Create a Bug Repro Skill",
        difficulty: "Medium",
        category: "Prompt / Skill Files",
        summary: "Draft a skill for turning messy bug reports into clean reproduction steps.",
        instructions: ["Include expected inputs.", "Require concise repro steps.", "Separate observed facts from assumptions."],
        starter: `Draft a skill file for an AI that converts messy QA bug notes into clean reproduction steps and expected vs actual sections.`,
        checks: [{ label: "Mentions expected inputs", test: (c) => /input|bug note|report/i.test(c) }, { label: "Mentions repro structure", test: (c) => /repro|steps|expected|actual/i.test(c) }, { label: "Separates fact from assumption", test: (c) => /fact|assumption|hypothesis|uncertain/i.test(c) }]
      },
      {
        id: "skill-selector-review",
        title: "Create a Selector Review Skill",
        difficulty: "Easy",
        category: "Prompt / Skill Files",
        summary: "Write a skill focused on evaluating automation selector quality.",
        instructions: ["Mention stable selector patterns.", "Call out nth and text-only selectors.", "Use review framing."],
        starter: `Draft a skill file for an AI that reviews Playwright and Cypress selectors for stability and maintainability.`,
        checks: [{ label: "Mentions stable selectors", test: (c) => /role|label|testid|data-cy|data-testid/i.test(c) }, { label: "Mentions selector anti-patterns", test: (c) => /nth|text-only|fragile|anti-pattern/i.test(c) }, { label: "Uses review framing", test: (c) => /review|finding|issue/i.test(c) }]
      }
    ]
  },
  {
    id: "test-design",
    title: "Test Design Practice",
    summary: "Practice designing better tests, edge cases, and automation strategies with AI feedback.",
    outputLabel: "Test Plan Draft",
    sourceLabel: "Feature Brief",
    previewLabel: "Test Design Brief",
    aiRole: "test design mentor",
    exercises: [
      {
        id: "login-test-plan",
        title: "Design Login Test Cases",
        difficulty: "Medium",
        category: "QA Test Design",
        summary: "Create a concise test plan for a login form with validation, auth, and failure states.",
        instructions: ["List functional, negative, and edge cases.", "Include validation coverage.", "Include failure-path coverage."],
        starter: `Feature brief:

Login form fields:
- email
- password

Behavior:
- valid credentials redirect to /dashboard
- invalid credentials show "Email or password is incorrect"
- empty fields show inline validation
- login button shows a loading state while request is pending

Write a concise test plan below.`,
        checks: [{ label: "Includes positive path", test: (c) => /valid|successful|redirect|dashboard/i.test(c) }, { label: "Includes negative path", test: (c) => /invalid|error|incorrect|failure/i.test(c) }, { label: "Includes validation", test: (c) => /empty|required|validation|inline/i.test(c) }]
      },
      {
        id: "playwright-test-ideas",
        title: "Plan Playwright Coverage",
        difficulty: "Medium",
        category: "Automation Strategy",
        summary: "Given a feature brief, propose practical Playwright test ideas and stronger assertions.",
        instructions: ["Focus on automation value.", "Mention user-visible assertions.", "Include flake-risk consideration."],
        starter: `Feature brief:

Checkout drawer:
- opens from cart icon
- shows cart line items
- lets the user remove an item
- disables checkout when the cart is empty
- shows a spinner while totals refresh

Draft Playwright test ideas below.`,
        checks: [{ label: "Mentions user-visible assertions", test: (c) => /assert|expect|visible|disabled|spinner|shows/i.test(c) }, { label: "Includes multiple scenarios", test: (c) => /remove|empty|open|refresh|totals/i.test(c) }, { label: "Mentions flake risk", test: (c) => /flaky|timing|wait|stabil|race/i.test(c) }]
      },
      {
        id: "acceptance-criteria-tests",
        title: "Generate Tests From Acceptance Criteria",
        difficulty: "Medium",
        category: "Acceptance Criteria",
        summary: "Turn product acceptance criteria into practical test ideas with happy path and edge coverage.",
        instructions: ["Use acceptance criteria.", "Include happy, negative, and edge coverage.", "Mention an automation candidate."],
        starter: `Acceptance criteria:

- User can upload a profile photo in JPG or PNG format
- Files larger than 5MB are rejected
- A preview is shown before save
- Save button stays disabled until upload succeeds
- Network failure shows a retry message

Draft practical test ideas below.`,
        checks: [{ label: "Includes happy path", test: (c) => /upload|preview|save|success/i.test(c) }, { label: "Includes failure coverage", test: (c) => /reject|failure|retry|invalid|error/i.test(c) }, { label: "Includes edge coverage", test: (c) => /5MB|size|format|disabled|edge/i.test(c) }]
      },
      {
        id: "registration-test-plan",
        title: "Design Registration Test Cases",
        difficulty: "Medium",
        category: "Auth",
        summary: "Create practical tests for a registration flow with verification and validation rules.",
        instructions: ["Include success and negative cases.", "Mention verification email.", "Cover validation rules."],
        starter: `Feature brief:

- User signs up with name, email, and password
- Email must be unique
- Password must be at least 10 characters
- Verification email is sent on success

Draft test ideas below.`,
        checks: [{ label: "Includes sign-up success", test: (c) => /success|sign up|verification/i.test(c) }, { label: "Includes validation", test: (c) => /unique|password|validation|email/i.test(c) }, { label: "Includes negative coverage", test: (c) => /invalid|error|reject/i.test(c) }]
      },
      {
        id: "search-test-plan",
        title: "Design Search Coverage",
        difficulty: "Easy",
        category: "Search",
        summary: "Draft test ideas for a search feature with empty, partial, and no-result states.",
        instructions: ["Include happy path and no-result cases.", "Mention partial matching.", "Keep notes practical."],
        starter: `Feature brief:

- Search bar filters support articles
- Results update after submit
- Empty query shows recent searches
- No match shows empty state

Draft test ideas below.`,
        checks: [{ label: "Includes empty or no-result states", test: (c) => /empty|no result|recent/i.test(c) }, { label: "Includes search behavior", test: (c) => /search|submit|result/i.test(c) }, { label: "Includes multiple scenarios", test: (c) => /partial|filter|match|query/i.test(c) }]
      },
      {
        id: "file-upload-plan",
        title: "Design File Upload Coverage",
        difficulty: "Medium",
        category: "File Upload",
        summary: "Create test ideas for a file upload flow with file-type and size restrictions.",
        instructions: ["Include positive, negative, and boundary tests.", "Mention file type and size checks.", "Keep it QA-oriented."],
        starter: `Feature brief:

- Users can upload PDF and DOCX files
- Files over 10MB are rejected
- Upload progress is shown
- Cancel upload returns user to idle state

Draft test ideas below.`,
        checks: [{ label: "Mentions file type or size boundaries", test: (c) => /10MB|size|PDF|DOCX|type/i.test(c) }, { label: "Mentions progress or cancel", test: (c) => /progress|cancel|idle/i.test(c) }, { label: "Includes negative coverage", test: (c) => /reject|invalid|error/i.test(c) }]
      },
      {
        id: "password-reset-plan",
        title: "Design Password Reset Coverage",
        difficulty: "Medium",
        category: "Auth",
        summary: "Draft a practical password reset test plan.",
        instructions: ["Include token flow and expiry.", "Mention password validation.", "Cover error states."],
        starter: `Feature brief:

- User requests a password reset email
- Reset link expires after 30 minutes
- New password must meet complexity rules
- Invalid or expired link shows an error page

Draft test ideas below.`,
        checks: [{ label: "Includes token or expiry coverage", test: (c) => /expired|30 minutes|link|token/i.test(c) }, { label: "Includes password validation", test: (c) => /password|complexity|validation/i.test(c) }, { label: "Includes success and error paths", test: (c) => /success|error|invalid/i.test(c) }]
      },
      {
        id: "notification-preferences-plan",
        title: "Design Preferences Coverage",
        difficulty: "Easy",
        category: "Settings",
        summary: "Create test ideas for a notification preferences screen.",
        instructions: ["Include save behavior and persistence.", "Mention default states.", "Keep it practical."],
        starter: `Feature brief:

- Users can toggle email, SMS, and push notifications
- Save button is disabled until a change is made
- Saved preferences persist after refresh

Draft test ideas below.`,
        checks: [{ label: "Includes state change and save coverage", test: (c) => /save|toggle|change/i.test(c) }, { label: "Includes persistence", test: (c) => /persist|refresh|reload/i.test(c) }, { label: "Mentions disabled/default states", test: (c) => /disabled|default/i.test(c) }]
      },
      {
        id: "role-permissions-plan",
        title: "Design Role and Permission Coverage",
        difficulty: "Hard",
        category: "Authorization",
        summary: "Draft test ideas for role-based access controls in an admin area.",
        instructions: ["Mention multiple roles.", "Include unauthorized cases.", "Cover action-level permissions."],
        starter: `Feature brief:

- Admins can manage users
- Managers can view but not delete users
- Members cannot access the admin page

Draft test ideas below.`,
        checks: [{ label: "Mentions multiple roles", test: (c) => /admin|manager|member/i.test(c) }, { label: "Includes unauthorized cases", test: (c) => /unauthorized|forbidden|cannot access|deny/i.test(c) }, { label: "Includes action-level coverage", test: (c) => /view|delete|manage/i.test(c) }]
      },
      {
        id: "offline-mode-plan",
        title: "Design Offline Mode Coverage",
        difficulty: "Medium",
        category: "Resilience",
        summary: "Plan tests for a feature that must handle offline and reconnect states.",
        instructions: ["Mention offline entry and reconnect.", "Include user-visible states.", "Keep notes practical."],
        starter: `Feature brief:

- Notes page works offline
- Saving while offline queues the update
- Reconnect syncs queued changes
- Conflicts show a warning banner

Draft test ideas below.`,
        checks: [{ label: "Mentions offline and reconnect", test: (c) => /offline|reconnect|sync|queue/i.test(c) }, { label: "Mentions user-visible state", test: (c) => /banner|warning|state|visible/i.test(c) }, { label: "Includes conflict handling", test: (c) => /conflict|warning/i.test(c) }]
      }
    ]
  }
];

export function findTrack(id) {
  return TRACKS.find((track) => track.id === id) || TRACKS[0];
}

export function findExercise(trackId, exerciseId) {
  const track = findTrack(trackId);
  return track.exercises.find((exercise) => exercise.id === exerciseId) || track.exercises[0];
}

export function runChecks(exercise, code) {
  return exercise.checks.map((check) => ({
    ...check,
    passed: Boolean(check.test(code))
  }));
}
