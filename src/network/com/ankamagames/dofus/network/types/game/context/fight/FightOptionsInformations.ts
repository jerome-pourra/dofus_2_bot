import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../../../jerakine/network/utils/BooleanByteWrapper";

export class FightOptionsInformations
{

	public static readonly protocolId: number = 1574;

	public isSecret: boolean = false;
	public isRestrictedToPartyOnly: boolean = false;
	public isClosed: boolean = false;
	public isAskingForHelp: boolean = false;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_FightOptionsInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.isSecret = BooleanByteWrapper.getFlag(_box0,0);
        this.isRestrictedToPartyOnly = BooleanByteWrapper.getFlag(_box0,1);
        this.isClosed = BooleanByteWrapper.getFlag(_box0,2);
        this.isAskingForHelp = BooleanByteWrapper.getFlag(_box0,3);
    }

    private deserializeAs_FightOptionsInformations(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}