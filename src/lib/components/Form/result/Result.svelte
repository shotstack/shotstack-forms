<script lang="ts">
	import { formatJson } from '../common/helpers';
	import SubmitArea from '../submit/SubmitArea.svelte';
	import type { IParsedEditSchema } from '../../../ShotstackEditTemplate/types';
	import Subtitle from '../template/Subtitle.svelte';
	import Icon from './Icon.svelte';
	import Json from './Json.svelte';
	export let result: IParsedEditSchema;
	export let download: string | undefined;
	export let submit: () => void;
	export let error: Error | null;
</script>

<div data-cy="result-section" class:hidden={error}>
	<Subtitle>Result</Subtitle>
	<Icon />
	<Json text={formatJson(result)} />
	<SubmitArea {submit} {download} />
</div>
