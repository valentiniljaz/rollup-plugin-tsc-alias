import { Plugin } from 'rollup';
import { ReplaceTscAliasPathsOptions } from 'tsc-alias';

declare function plugin(
  options?: ReplaceTscAliasPathsOptions
): Plugin;

export = plugin;
